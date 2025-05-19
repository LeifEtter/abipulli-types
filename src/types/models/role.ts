import { z } from "zod";

export const UserRoleSchema = z.object({
  id: z.string(),
  roleName: z.string(),
  rolePower: z.number(),
});
export type UserRole = z.infer<typeof UserRoleSchema>;

export const UserRoleCreateSchema = UserRoleSchema.omit({ id: true });
export type UserRoleCreateInput = z.infer<typeof UserRoleCreateSchema>;

export const UserRoleUpdateSchema = UserRoleCreateSchema.partial();
export type UserRoleUpdateInput = z.infer<typeof UserRoleUpdateSchema>;
