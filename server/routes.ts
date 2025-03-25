import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking endpoint
  app.post("/api/booking", async (req: Request, res: Response) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);
      res.status(201).json({ success: true, data: booking });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: validationError.details 
        });
      } else {
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
