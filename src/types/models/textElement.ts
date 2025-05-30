import { z } from "zod";

//TODO: Use same Pattern as with Image Elements
export const TextElementSchema = z.object({
  id: z.number(),
  text: z.string(),
  createdAt: z.coerce.date(),
  positionX: z.number(),
  positionY: z.number(),
  fontSize: z.number(),
  fontColor: z.string(),
  fontWeight: z.number(),
  fontStyle: z.string(),
});
export type TextElement = z.infer<typeof TextElementSchema>;

export const TextElementCreateParamsSchema = TextElementSchema.omit({
  id: true,
});
export type TextElementCreateParams = z.infer<
  typeof TextElementCreateParamsSchema
>;

export const TextElementUpdateParamsSchema =
  TextElementCreateParamsSchema.partial();
export type TextElementUpdateParams = z.infer<
  typeof TextElementUpdateParamsSchema
>;
