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

export const GenderSchema = z.union([
  z.literal("weiblich"),
  z.literal("männlich"),
  z.literal("divers"),
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
  email: z
    .string("Bitte gebe email ein")
    .nonempty("bitte geb ein")
    .pipe(z.email("Gib eine richtige Email an")),
  password: PasswordSchema,
  firstName: z.string("Bitte gib deinen Vornamen an"),
  lastName: z.string("Bitte gib deinen Nachnamen an"),
  gender: GenderSchema,
  mobileCountryCode: MobileCountryCodeSchema,
  mobileNumber: z.e164("Bitte gebe eine valide Nummer ein"),
  birthdate: z.coerce.date(),
  grade: z
    .number("Gib eine Zahl von 1-13 an")
    .min(1, "Gib eine Zahl von 1-13 an")
    .max(13, "Gib eine Zahl von 1-13 an"),
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
  password: true,
  firstName: true,
  lastName: true,
  gender: true,
  mobileCountryCode: true,
  mobileNumber: true,
  birthdate: true,
  grade: true,
});
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

export const UserChangePasswordParamsSchema = UserSchema.pick({
  password: true,
}).extend({ oldPassword: z.string() });

export type UserChangePasswordParams = z.infer<
  typeof UserChangePasswordParamsSchema
>;

const UserLoginResultSchema = UserSchema.pick({ id: true }).extend({
  token: z.string(),
});
export type UserLoginResult = z.infer<typeof UserLoginResultSchema>;

const UserCheckAuthResultSchema = UserSchema.pick({ id: true });
export type UserCheckAuthResult = z.infer<typeof UserCheckAuthResultSchema>;
