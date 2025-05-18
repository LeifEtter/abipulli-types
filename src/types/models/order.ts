import { User } from "./user";
import { Chat } from "./chat";
import { Design } from "./design";

export enum OrderStatus {
  CREATED = "CREATED",
  BASIC_INFO = "BASIC_INFO",
  DESIGNING = "DESIGNING",
  REVISING = "REVISING",
  FINISHING_INFO = "FINISHING_INFO",
}

export interface Order {
  id: number;
  customerId: number;
  customer?: User;
  deadline?: Date;
  destinationCountry?: string;
  studentAmount?: number;
  schoolName?: string;
  motto?: string;
  deliveryAddress?: string;
  createdAt: Date;
  updatedAt: Date;
  status: OrderStatus;
  designs?: Design[];
  chats?: Chat[];
}

export type OrderCreateInput = Omit<
  Order,
  "id" | "createdAt" | "updatedAt" | "designs" | "chats"
>;

// All fields optional but "id" is mandatory
export type OrderUpdateInput = {
  id: number;
} & Partial<Omit<Order, "id">>;
