import { z } from "zod";

export const inquiryTypes = [
  "General Inquiry",
  "Wholesale",
  "Retail",
  "Food Service",
  "Partnership",
  "Product Inquiry",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  company: z.string().trim().optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .regex(/^[+\d][\d\s()-]{6,}$/, "Please enter a valid phone number."),
  inquiryType: z.enum(inquiryTypes, { message: "Please select an inquiry type." }),
  message: z.string().trim().min(10, "Please tell us a little more (min. 10 characters)."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
});
