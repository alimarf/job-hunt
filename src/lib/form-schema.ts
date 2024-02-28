import { z } from "zod";

export const formFilterSchema = z.object({
  categories: z.array(z.string()),
});

export const formFilterCompaniesSchema = z.object({
  industry: z.array(z.string()),
});

export const formApplySchema = z.object({
  resume: z.any().refine((file: any) => file?.name, "Please upload Resume"),
  fullname: z
    .string({ required_error: "Fullname is Required" })
    .min(5, { message: "Fullname min 5 characters" }),
  email: z
    .string({ required_error: "Email is Required" })
    .email({ message: "Email is not valid" }),
  phone: z.string().min(6, { message: "Phone have 6 characters" }),
  previousJobTitle: z.string(),
  linkedIn: z.string(),
  portfolio: z.string(),
  coverLetter: z.string(),
});
