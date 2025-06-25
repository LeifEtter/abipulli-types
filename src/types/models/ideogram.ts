import { z } from "zod";

export const IdeogramImageSchema = z.object({
  is_image_safe: z.boolean(),
  prompt: z.string(),
  resolution: z.string(),
  seed: z.number(),
  style_type: z.string(),
  url: z.string(),
});
export type IdeogramImage = z.infer<typeof IdeogramImageSchema>;

export const IdeogramResponseSchema = z.object({
  created: z.coerce.date(),
  data: z.array(IdeogramImageSchema),
});
export type IdeogramResponse = z.infer<typeof IdeogramResponseSchema>;

export const AspectRatioList = [
  "1x3",
  "3x1",
  "1x2",
  "2x1",
  "9x16",
  "16x9",
  "10x16",
  "16x10",
  "2x3",
  "3x2",
  "3x4",
  "4x3",
  "4x5",
  "5x4",
  "1x1",
] as const;
export type AspectRatio = (typeof AspectRatioList)[number];

export const MagicPromptModeList = ["AUTO", "OFF", "ON"] as const;
export type MagicPromptMode = (typeof MagicPromptModeList)[number];

export const StyleTypeList = [
  "AUTO",
  "GENERAL",
  "REALISTIC",
  "DESIGN",
] as const;
export type StyleType = (typeof StyleTypeList)[number];

export const RenderingSpeedTypeList = ["TURBO", "DEFAULT", "QUALITY"] as const;
export type RenderingSpeed = (typeof RenderingSpeedTypeList)[number];

export const IdeogramRequestSchema = z.object({
  prompt: z.string(),
  seed: z.string().optional(),
  resolution: z.string().optional(),
  aspect_ratio: z.enum(AspectRatioList),
  magic_prompt: z.enum(MagicPromptModeList).optional(),
  negative_prompt: z.string().optional(),
  num_images: z.number().optional(),
  color_palette: z.object({}).optional(),
  style_codes: z.array(z.string()).optional(),
  style_type: z.enum(StyleTypeList).optional(),
  style_reference_images: z.any().array().optional(),
  rendering_speed: z.enum(RenderingSpeedTypeList).optional(),
});

export type IdeogramRequest = z.infer<typeof IdeogramRequestSchema>;
