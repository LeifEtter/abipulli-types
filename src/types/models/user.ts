import { UserRoleSchema } from "./role";
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

export const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  password: PasswordSchema,
  firstName: z.string(),
  lastName: z.string(),
  school: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  role: UserRoleSchema,
  // orders: OrderSchema.array().optional(),
  storageUsed: z.number(),
  totalCost: z.number(),
  verified: z.boolean(),
});
export type User = z.infer<typeof UserSchema>;

export const UserCreateSchema = UserSchema.pick({
  email: true,
  password: true,
  firstName: true,
  lastName: true,
  school: true,
});
export type UserCreate = z.infer<typeof UserCreateSchema>;

export const UserLoginSchema = UserCreateSchema.pick({
  email: true,
  password: true,
});
export type UserLogin = z.infer<typeof UserLoginSchema>;

export const UserUpdateSchema = UserCreateSchema.omit({ email: true });
export type UserUpdate = z.infer<typeof UserUpdateSchema>;
