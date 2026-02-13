import { z } from "zod";

export const eventFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  
  // FIXED: Removed .optional() so it matches your Database type (String)
  description: z.string(), 
  
  durationInMinutes: z.number()
    .int()
    .positive("Duration must be greater than 0")
    // FIXED TYPO: changed "kess" to "less"
    .max(60 * 12, `Duration must be less than 12 hours (${60 * 12} minutes)`),
    
  isActive: z.boolean()
});