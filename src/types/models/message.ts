import { z } from "zod";
import { UserSchema } from "./user";
import { DesignSchema } from "./design";

export const MessageSchema = z.object({
  id: z.number(),
  content: z.string(),
  senderId: z.number(),
  sender: UserSchema.optional(),
  designId: z.number().optional(),
  design: DesignSchema.optional(),
  chatId: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type Message = z.infer<typeof MessageSchema>;

export const MessageCreateSchema = MessageSchema.pick({
  content: true,
  designId: true,
});
export type MessageCreate = z.infer<typeof MessageCreateSchema>;
