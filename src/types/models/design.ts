import { z } from "zod";
import { TextElementSchema } from "./textElement.js";
import { ImageSchema } from "./image.js";
import { PulloverSchema } from "./pullover.js";

export const DesignSuggestionSchema = z.object({
  id: z.number(),
  chatId: z.number(),
  designId: z.number(),
  accepted: z.boolean().default(false),
  denied: z.boolean().default(false),
  suggestion: z.string(),
  createdAt: z.coerce.date(),
});
export type DesignSuggestion = z.infer<typeof DesignSuggestionSchema>;

export const DesignSuggestionCreateSchema = DesignSuggestionSchema.pick({
  designId: true,
  suggestion: true,
});
export type DesignCreateSuggestion = z.infer<
  typeof DesignSuggestionCreateSchema
>;

export const DesignSchema = z.object({
  id: z.number(),
  orderId: z.number(),
  preferredPulloverId: z.number().optional(),
  preferredPullover: PulloverSchema.optional(),
  images: z.array(ImageSchema).optional(),
  textElements: z.array(TextElementSchema).optional(),
  designCost: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  customerId: z.number(),
});
export type Design = z.infer<typeof DesignSchema>;

export const DesignCreateSchema = DesignSchema.pick({
  preferredPulloverId: true,
});
export type DesignCreate = z.infer<typeof DesignCreateSchema>;
