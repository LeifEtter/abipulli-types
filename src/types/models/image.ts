import { z } from "zod";
import { AspectRatioList } from "./ideogram";

export const ImageSchema = z.object({
  id: z.number(),
  createdAt: z.coerce.date(),
  generated: z.boolean().optional(),
  prompt: z.string().optional(),
  userId: z.number().optional(),
  uuid: z.string(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
});

export type Image = z.infer<typeof ImageSchema>;

export const ImageWithPositionAndScaleSchema = ImageSchema.extend({
  positionX: z.number().optional(),
  positionY: z.number().optional(),
  scaleX: z.number().optional(),
  scaleY: z.number().optional(),
  imageToDesignId: z.number(),
});

export type ImageWithPositionAndScale = z.infer<
  typeof ImageWithPositionAndScaleSchema
>;

export const ImageUploadParamsSchema = ImageSchema.pick({
  prompt: true,
  generated: true,
});
export type ImageUploadParams = z.infer<typeof ImageUploadParamsSchema>;

export type ImageUploadResult = {
  link: string;
  imageId: number;
};

export const DesignImageSchema = z.object({
  imageId: z.number(),
  imageToDesignId: z.number(),
  image: ImageSchema,
  positionX: z.number(),
  positionY: z.number(),
  scaleX: z.number().optional(),
  scaleY: z.number().optional(),
});

export const AddImageToDesignParamsSchema = DesignImageSchema.pick({
  positionX: true,
  positionY: true,
}).extend({
  scaleX: z.number(),
  scaleY: z.number(),
});
export type AddImageToDesignParams = z.infer<
  typeof AddImageToDesignParamsSchema
>;

export const ManipulateImageInDesignParamsSchema = DesignImageSchema.pick({
  positionX: true,
  positionY: true,
  scaleX: true,
  scaleY: true,
}).partial();
export type ManipulateImageInDesignParams = z.infer<
  typeof ManipulateImageInDesignParamsSchema
>;

export const GenerateImageParamsSchema = z.object({
  referenceImageId: z.number().optional(),
  prompt: z.string(),
  aspectRatio: z.enum(AspectRatioList),
});
export type GenerateImageParams = z.infer<typeof GenerateImageParamsSchema>;

export const ImproveImageQueryParamsSchema = z.object({
  motto: z.string(),
  styleTags: z.array(z.string()),
  description: z.string(),
});
export type ImproveImageQueryParams = z.infer<
  typeof ImproveImageQueryParamsSchema
>;

const ImproveImageQueryResultSchema = ImproveImageQueryParamsSchema.pick({
  description: true,
});

export type ImproveImageQueryResult = z.infer<
  typeof ImproveImageQueryResultSchema
>;

export const CommentOnQueryParamsSchema = z.object({
  description: z.string(),
  comment: z.string(),
});
export type CommentOnQueryParams = z.infer<typeof CommentOnQueryParamsSchema>;

export const ImproveImageParamsSchema = ImproveImageQueryParamsSchema.pick({
  styleTags: true,
  description: true,
}).extend({
  target: z.string(),
});

export type ImproveImageParams = z.infer<typeof ImproveImageParamsSchema>;
