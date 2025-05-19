import { z } from "zod";
import { UserSchema } from "./user";
import { MessageSchema } from "./message";

export const ChatSchema = z.object({
  id: z.number(),
  messages: z.array(MessageSchema),
  lastMessageAt: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  orderId: z.number(),
  userId: z.number(),
  user: UserSchema.optional(),
  assignedAdminId: z.number().optional(),
  assignedAdmin: UserSchema.optional(),
});
export type Chat = z.infer<typeof ChatSchema>;
