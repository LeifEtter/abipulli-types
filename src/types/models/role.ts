export interface UserRole {
  id: string;
  roleName: string;
  rolePower: number;
}

export type UserRoleCreateInput = Omit<UserRole, "id">;
export type UserRoleUpdateInput = Partial<Omit<UserRole, "id">> & {
  id: string;
};
