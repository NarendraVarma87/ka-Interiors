import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z
    .string()
    .min(10, { message: 'Please enter a valid phone number (min 10 digits).' })
    .max(16, { message: 'Phone number cannot exceed 16 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  projectType: z.enum(['residential', 'commercial', 'both'], {
    errorMap: () => ({ message: 'Please select a project type.' }),
  }),
  city: z.string().min(2, { message: 'Please specify your project city.' }),
  budgetRange: z.string().min(2, { message: 'Please select your budget range.' }),
  message: z.string().min(10, { message: 'Please share a brief note about your project (min 10 characters).' }),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
