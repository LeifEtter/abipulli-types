import { z } from "zod";

export const PromptSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string().optional(),
  description: z.string(),
  content: z.string(),
  purpose: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type Prompt = z.infer<typeof PromptSchema>;
