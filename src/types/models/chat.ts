import { z } from "zod";
import { UserSchema } from "./user";
import { ChatMessageSchema } from "./chatMessage";

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
