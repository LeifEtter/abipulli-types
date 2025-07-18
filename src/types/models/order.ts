import { ChatSchema } from "./chat.js";
import { DesignSchema } from "./design.js";
import { minLength, z } from "zod";

export const OrderStatusSchema = z.union([
  z.literal("CREATED"),
  z.literal("BASIC_INFO"),
  z.literal("DESIGNING"),
  z.literal("REVISING"),
  z.literal("FINISHING_INFO"),
]);

export type OrderStatus = z.infer<typeof OrderStatusSchema>;

export const CountryCodeSchema = z.union([
  z.literal("DE"),
  z.literal("CH"),
  z.literal("AT"),
]);

export type CountryCode = z.infer<typeof CountryCodeSchema>;

export const OrderSchema = z.object({
  id: z.number(),
  customerId: z.number(),
  deadline: z.coerce.date(),
  schoolCountryCode: CountryCodeSchema,
  schoolCity: z.string("Bitte gebe eine Stadt ein"),
  school: z.string("Bitte gib eure Schule an"),
  studentAmount: z.number(),
  graduationYear: z
    .number("Bitte gib ein valides Jahr an")
    .min(1900, "Bitte gib ein valides Jahr an")
    .max(3000, "Bitte gib ein valides Jahr an"),
  currentGrade: z
    .number("Gib eine Zahl von 1-13 an")
    .min(1, "Gib eine Zahl von 1-13 an")
    .max(13, "Gib eine Zahl von 1-13 an"),
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
  schoolCity: true,
  schoolCountryCode: true,
  deadline: true,
  graduationYear: true,
  currentGrade: true,
}).extend({
  motto: OrderSchema.shape.motto.optional(),
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
