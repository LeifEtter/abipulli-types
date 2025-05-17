import { Order } from "./order";
import { User } from "./user";
export interface Chat {
    id: number;
    messages: Message[];
    lastMessageAt: Date;
    createdAt: Date;
    orderId: number;
    order?: Order;
    userId: number;
    user?: User;
}
export interface Message {
    id: number;
    content: string;
    senderId: number;
    createdAt: Date;
}
export type ChatCreateInput = Omit<Chat, "id" | "createdAt" | "messages" | "lastMessageAt" | "userId">;
export type MessageCreateInput = Omit<Message, "id" | "createdAt" | "senderId">;
