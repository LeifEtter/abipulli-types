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

export const PromptCreateParamsSchema = PromptSchema.pick({
  title: true,
  content: true,
  purpose: true,
});

export type PromptCreateParams = z.infer<typeof PromptCreateParamsSchema>;
