import { ChatSchema } from "./chat.js";
import { DesignSchema } from "./design.js";
import { ImageSchema } from "./image.js";
import { OrderSchema } from "./order.js";
import { UserRoleSchema } from "./role.js";
import { z } from "zod";

export const PasswordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(100, "Password must be less than 100 characters long")
  .refine(
    (val) => /[A-Z]/.test(val),
    "Password must contain at least one uppercase letter"
  )
  .refine(
    (val) => /[0-9]/.test(val),
    "Password must contain at least one number"
  )
  .refine(
    (val) => /[!@#$%^&*]/.test(val),
    "Password must contain at least one special character"
  );

export const CountryCodeSchema = z.union([
  z.literal("DE"),
  z.literal("CH"),
  z.literal("AT"),
]);

export type CountryCode = z.infer<typeof CountryCodeSchema>;

export const GenderSchema = z.union([
  z.literal("male"),
  z.literal("female"),
  z.literal("diverse"),
]);

export type Gender = z.infer<typeof GenderSchema>;

export const MobileCountryCodeSchema = z.union([
  z.literal("+49"),
  z.literal("+41"),
  z.literal("+43"),
]);

export type MobileCountryCode = z.infer<typeof MobileCountryCodeSchema>;

export const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  password: PasswordSchema,
  firstName: z.string(),
  lastName: z.string(),
  gender: GenderSchema,
  mobileCountryCode: MobileCountryCodeSchema,
  mobileNumber: z.string(),
  birthdate: z.coerce.date(),
  school: z.string(),
  grade: z.number(),
  graduationYear: z.number(),
  city: z.string(),
  countryCode: CountryCodeSchema,
  deadline: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  role: UserRoleSchema.optional(),
  storageUsed: z.number().optional(),
  totalCost: z.number().optional(),
  verified: z.boolean(),
  orders: z.array(OrderSchema).optional(),
  images: z.array(ImageSchema).optional(),
  chats: z.array(ChatSchema).optional(),
  designs: z.array(DesignSchema).optional(),
});
export type User = z.infer<typeof UserSchema>;

export const UserCreateParamsSchema = UserSchema.pick({
  email: true,
  firstName: true,
  lastName: true,
  school: true,
}).extend({ password: PasswordSchema });
export type UserCreateParams = z.infer<typeof UserCreateParamsSchema>;

export const UserLoginParamsSchema = UserCreateParamsSchema.pick({
  email: true,
  password: true,
});
export type UserLoginParams = z.infer<typeof UserLoginParamsSchema>;

export const UserUpdateParamsSchema = UserCreateParamsSchema.omit({
  email: true,
});
export type UserUpdateParams = z.infer<typeof UserUpdateParamsSchema>;

const UserLoginResultSchema = UserSchema.pick({ id: true }).extend({
  token: z.string(),
});
export type UserLoginResult = z.infer<typeof UserLoginResultSchema>;

const UserCheckAuthResultSchema = UserSchema.pick({ id: true });
export type UserCheckAuthResult = z.infer<typeof UserCheckAuthResultSchema>;
