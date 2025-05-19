import { z } from "zod";

export const PulloverSchema = z.object({
  id: z.number(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  basePrice: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type Pullover = z.infer<typeof PulloverSchema>;

export const CreatePulloverSchema = PulloverSchema.pick({
  name: true,
  description: true,
  basePrice: true,
  color: true,
});
export type CreatePullover = z.infer<typeof CreatePulloverSchema>;
