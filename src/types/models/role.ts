import { z } from "zod";

export const UserRoleSchema = z.object({
  id: z.number(),
  roleName: z.string(),
  rolePower: z.number(),
});
export type UserRole = z.infer<typeof UserRoleSchema>;

export const UserRoleCreateParamsSchema = UserRoleSchema.omit({ id: true });
export type UserRoleCreateInput = z.infer<typeof UserRoleCreateParamsSchema>;

export const UserRoleUpdateSchema = UserRoleCreateParamsSchema.partial();
export type UserRoleUpdateInput = z.infer<typeof UserRoleUpdateSchema>;
