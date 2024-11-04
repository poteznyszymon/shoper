import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type loginFormValues = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z.object({
  firstName: z.string().min(1),
  secondName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

export type registerFormValues = z.infer<typeof registerFormSchema>;
