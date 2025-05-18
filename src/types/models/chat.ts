import { Design } from "./design";
import { Order } from "./order";
import { User } from "./user";

export interface Chat {
  id: number;
  messages: Message[];
  lastMessageAt: Date;
  createdAt: Date;
  updatedAt: Date;
  orderId: number;
  order?: Order;
  userId: number;
  user?: User;
  assignedAdminId?: number;
  assignedAdmin?: User;
}

export interface Message {
  id: number;
  content: string;
  senderId: number;
  sender?: User;
  designId?: number;
  design?: Design;
  chatId: number;
  chat?: Chat;
  createdAt: Date;
  updatedAt: Date;
}

export type ChatCreateInput = Omit<
  Chat,
  "id" | "createdAt" | "updatedAt" | "order" | "user"
>;
export type ChatUpdateInput = Partial<Omit<Chat, "id">> & { id: number };

export type MessageCreateInput = Omit<
  Message,
  "id" | "createdAt" | "updatedAt" | "senderId"
>;
