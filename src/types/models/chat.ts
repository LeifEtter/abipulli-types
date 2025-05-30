import { z } from "zod";
import { ChatMessageSchema } from "./chatMessage.js";

export const ChatSchema = z.object({
  id: z.number(),
  messages: z.array(ChatMessageSchema),
  lastMessageAt: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  orderId: z.number(),
  userId: z.number(),
  assignedAdminId: z.number().optional(),
});
export type Chat = z.infer<typeof ChatSchema>;

export const ChatCreateParamsSchema = ChatSchema.pick({
  assignedAdminId: true,
}).extend({
  initialMessage: z.string().optional(),
});

export type ChatCreateParams = z.infer<typeof ChatCreateParamsSchema>;
