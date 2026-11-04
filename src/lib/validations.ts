import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(100),
  companyName: z.string().max(150).optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .max(20)
    .optional()
    .refine(
      (val) => !val || /^[+\d\s\-()]{7,20}$/.test(val),
      "Please enter a valid phone number"
    ),
  service: z.enum([
    "Website (Digital Presence)",
    "SEO (Search Engine Optimization)",
    "AI Tele Agent",
    "WhatsApp Customer Communication",
    "Augmented Reality 3D Dish Modelling",
    "Online Advertising",
    "Other",
  ]),
  budget: z
    .enum([
      "Below ₹25,000",
      "₹25,000–₹50,000",
      "₹50,000–₹1,00,000",
      "Above ₹1,00,000",
      "Not sure yet",
    ])
    .optional(),
  timeline: z
    .enum([
      "Immediately",
      "Within 1 month",
      "Within 3 months",
      "Exploring options",
    ])
    .optional(),
  message: z
    .string()
    .min(20, "Please tell us a bit more about your project (at least 20 characters)")
    .max(5000),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
