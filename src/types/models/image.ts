import { z } from "zod";
import { UserSchema } from "./user";

export const ImageSchema = z.object({
  id: z.number(),
  createdAt: z.coerce.date(),
  generated: z.boolean(),
  prompt: z.string(),
  userId: z.number(),
});
export type Image = z.infer<typeof ImageSchema>;

export const ImageUploadSchema = z.object({
  prompt: z.string(),
  generated: z.boolean(),
});
export type ImageUpload = z.infer<typeof ImageUploadSchema>;

export type ImageUploadResult = {
  link: string;
  imageId: number;
};

export const DesignImageSchema = z.object({
  imageId: z.number(),
  image: ImageSchema,
  positionX: z.number(),
  positionY: z.number(),
  scale: z.number(),
});

export const AddImageToDesignSchema = DesignImageSchema.pick({
  positionX: true,
  positionY: true,
  scale: true,
});
export type AddImageToDesign = z.infer<typeof AddImageToDesignSchema>;

export const ManipulateImageInDesignSchema = DesignImageSchema.pick({
  positionX: true,
  positionY: true,
  scale: true,
}).partial();
export type ManipulateImageInDesign = z.infer<
  typeof ManipulateImageInDesignSchema
>;

export const GenerateImageSchema = z.object({
  prompt: z.string(),
  styleTags: z.array(z.string()),
});
export type GenerateImage = z.infer<typeof GenerateImageSchema>;

export const ImproveImageQuerySchema = z.object({
  motto: z.string(),
  styleTags: z.array(z.string()),
  description: z.string(),
});
export type ImproveImageQuery = z.infer<typeof ImproveImageQuerySchema>;
