import { z } from "zod";
import { UserSchema } from "./user";

export const ImageSchema = z.object({
  id: z.number(),
  origin: z.string(),
  createdAt: z.coerce.date(),
  generated: z.boolean(),
  prompt: z.string(),
  userId: z.number(),
  user: UserSchema.optional(),
});
export type Image = z.infer<typeof ImageSchema>;

export const UploadImageSchema = z.object({
  origin: z.string(),
  prompt: z.string(),
  generated: z.boolean(),
});
export type UploadImage = z.infer<typeof UploadImageSchema>;

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
