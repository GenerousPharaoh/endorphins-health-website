import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const bookingFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  date: z.string().min(1, { message: "Please select a date." }),
  time: z.string().min(1, { message: "Please select a time." }),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const Booking = () => {
  const { toast } = useToast();
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormValues) => {
      const response = await apiRequest("POST", "/api/booking", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Appointment Requested",
        description: "We will contact you shortly to confirm your appointment.",
      });
      form.reset();
    },
    onError: (error) => {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: BookingFormValues) {
    bookingMutation.mutate(data);
  }

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Book Your Appointment</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule your visit to Endorphins Health and Wellness Centre and take the first step toward better health and wellness.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-card rounded-lg p-8 shadow-md border border-border">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-foreground font-medium mb-2">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          {...field} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-foreground font-medium mb-2">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your.email@example.com" 
                          type="email" 
                          {...field} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-foreground font-medium mb-2">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(123) 456-7890" 
                          type="tel" 
                          {...field} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-foreground font-medium mb-2">Service</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="chiropractic">Chiropractic Care</SelectItem>
                          <SelectItem value="physiotherapy">Physiotherapy</SelectItem>
                          <SelectItem value="athletic-therapy">Athletic Therapy</SelectItem>
                          <SelectItem value="massage-therapy">Massage Therapy</SelectItem>
                          <SelectItem value="acupuncture">Acupuncture</SelectItem>
                          <SelectItem value="podiatry">Podiatry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-foreground font-medium mb-2">Preferred Date</FormLabel>
                      <FormControl>
                        <Input 
                          type="date" 
                          {...field} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-foreground font-medium mb-2">Preferred Time</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                          <SelectItem value="evening">Evening (4PM - 7PM)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-foreground font-medium mb-2">Additional Information</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          placeholder="Please share any specific concerns or requests" 
                          {...field} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-heading font-medium py-3 px-6 rounded-md transition-all relative overflow-hidden group"
                    disabled={bookingMutation.isPending}
                  >
                    <span className="relative z-10">
                      {bookingMutation.isPending ? "Submitting..." : "Request Appointment"}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <div id="contact" className="bg-card rounded-lg p-8 shadow-md border border-border mb-8 relative overflow-hidden">
              {/* Subtle accent elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[60px]"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 rounded-md p-2 text-primary mr-4 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    4631 Palladium Way (Unit 6)<br />
                    Burlington, ON
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 rounded-md p-2 text-primary mr-4 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">(905) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 rounded-md p-2 text-primary mr-4 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">info@endorphinshealth.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-md p-2 text-primary mr-4 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg text-foreground mb-1">Hours</h4>
                  <p className="text-muted-foreground mb-1">Monday - Friday: 8:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground mb-1">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
              </div>
            </div>
            
            <div className="bg-card/50 rounded-lg overflow-hidden h-80 shadow-md border border-border relative">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-md z-10"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-md z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.314048669502!2d-79.8311697847753!3d43.25909547913724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9e8a7dcfd935%3A0xf9c6231fa2a27a0!2s4631%20Palladium%20Way%2C%20Burlington%2C%20ON%20L7M%200W5%2C%20Canada!5e0!3m2!1sen!2sus!4v1652822836127!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Endorphins Health and Wellness Centre Map"
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
