import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body using zod schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact message
      // Note: In a real-world application, you might want to:
      // 1. Send an email notification
      // 2. Save to a database
      // 3. Implement rate limiting to prevent spam
      
      // For now, we'll just log the message
      console.log("New contact message received:", validatedData);
      
      // Return success response
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
