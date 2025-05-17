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
  deadline: Date;
  destinationCountry: string;
  studentAmount: number;
  schoolName: string;
  motto: string;
  deliveryAddress: string;
  createdAt: Date;
  updatedAt: Date;
  status: OrderStatus;
  design?: Design;
}

export type OrderCreateInput = Omit<Order, "id" | "createdAt" | "updatedAt">;
export type OrderUpdateInput = Partial<
  Omit<Order, "id" | "createdAt" | "updatedAt">
>;
