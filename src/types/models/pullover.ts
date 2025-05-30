import { z } from "zod";

export const PulloverSchema = z.object({
  id: z.number(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
  basePrice: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  imageId: z.number(),
});
export type Pullover = z.infer<typeof PulloverSchema>;

export const PulloverCreateParamsSchema = PulloverSchema.pick({
  name: true,
  description: true,
  basePrice: true,
  color: true,
});
export type PulloverCreateParams = z.infer<typeof PulloverCreateParamsSchema>;
