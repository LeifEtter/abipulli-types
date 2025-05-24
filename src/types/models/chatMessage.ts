import { z } from "zod";
import { UserSchema } from "./user";
import { DesignSchema } from "./design";

export const ChatMessageSchema = z.object({
  id: z.number(),
  content: z.string(),
  senderId: z.number(),
  designId: z.number().optional(),
  design: DesignSchema.optional(),
  chatId: z.number(),
  createdAt: z.coerce.date(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;

export const ChatMessageCreateSchema = ChatMessageSchema.pick({
  content: true,
  designId: true,
});
export type MessageCreate = z.infer<typeof ChatMessageCreateSchema>;
