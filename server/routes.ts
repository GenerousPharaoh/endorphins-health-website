import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { routesDebug, debugObj } from "./debug";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking endpoint
  app.post("/api/booking", async (req: Request, res: Response) => {
    routesDebug('Received booking request');
    debugObj(routesDebug, 'Request body', req.body);
    
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      routesDebug('Booking data validated successfully');
      
      const booking = await storage.createBooking(bookingData);
      routesDebug('Booking created successfully');
      debugObj(routesDebug, 'Created booking', booking);
      
      res.status(201).json({ success: true, data: booking });
    } catch (error) {
      if (error instanceof ZodError) {
        routesDebug('Validation error in booking request');
        const validationError = fromZodError(error);
        debugObj(routesDebug, 'Validation errors', validationError.details);
        
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: validationError.details 
        });
      } else {
        routesDebug('Unexpected error in booking request: %O', error);
        console.error("Booking error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to create booking" 
        });
      }
    }
  });

  // Get all bookings (for admin purposes)
  app.get("/api/bookings", async (req: Request, res: Response) => {
    try {
      const bookings = await storage.getBookings();
      res.status(200).json({ success: true, data: bookings });
    } catch (error) {
      console.error("Get bookings error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve bookings" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
