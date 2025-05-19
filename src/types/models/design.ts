import { z } from "zod";
import { TextElementSchema } from "./textElement";
import { ImageSchema } from "./image";
import { PulloverSchema } from "./pullover";

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

export const CreateDesignSuggestionSchema = DesignSuggestionSchema.pick({
  designId: true,
  suggestion: true,
});
export type CreateDesignSuggestion = z.infer<
  typeof CreateDesignSuggestionSchema
>;

export const DesignSchema = z.object({
  id: z.number(),
  orderId: z.number(),
  preferredPulloverId: z.number().optional(),
  preferredPullover: PulloverSchema.optional(),
  images: z.array(ImageSchema),
  textElements: z.array(TextElementSchema),
  designSuggestions: z.array(DesignSuggestionSchema),
  designCost: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type Design = z.infer<typeof DesignSchema>;

export const CreateDesignSchema = DesignSchema.pick({
  preferredPulloverId: true,
});
export type CreateDesign = z.infer<typeof CreateDesignSchema>;
