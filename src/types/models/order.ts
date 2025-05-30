import { ChatSchema } from "./chat.js";
import { DesignSchema } from "./design.js";
import { z } from "zod";

export const OrderStatusSchema = z.union([
  z.literal("CREATED"),
  z.literal("BASIC_INFO"),
  z.literal("DESIGNING"),
  z.literal("REVISING"),
  z.literal("FINISHING_INFO"),
]);

export type OrderStatus = z.infer<typeof OrderStatusSchema>;

export const OrderSchema = z.object({
  id: z.number(),
  customerId: z.number(),
  deadline: z.coerce.date(),
  schoolCountry: z.string(),
  studentAmount: z.number(),
  school: z.string(),
  motto: z.string(),
  deliveryAddress: z.string(),
  billingAddress: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  status: OrderStatusSchema,
  designs: z.array(DesignSchema).optional(),
  chats: z.array(ChatSchema).optional(),
});
export type Order = z.infer<typeof OrderSchema>;

export const OrderCreateParamsSchema = OrderSchema.pick({
  school: true,
  schoolCountry: true,
}).extend({
  motto: OrderSchema.shape.motto.optional(),
  deadline: OrderSchema.shape.deadline.optional(),
  studentAmount: OrderSchema.shape.studentAmount.optional(),
});
export type OrderCreateParams = z.infer<typeof OrderCreateParamsSchema>;
export const OrderCompleteParamsSchema = OrderSchema.pick({
  studentAmount: true,
  deliveryAddress: true,
  billingAddress: true,
});
export type OrderCompleteParams = z.infer<typeof OrderCompleteParamsSchema>;

export const OrderUpdateParamsSchema = OrderSchema.omit({
  id: true,
  customerId: true,
  createdAt: true,
  updatedAt: true,
  designs: true,
  chats: true,
}).partial();
export type OrderUpdateParams = z.infer<typeof OrderUpdateParamsSchema>;
