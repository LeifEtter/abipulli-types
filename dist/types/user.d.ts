export interface User {
    id: number;
    email: string;
    name: string;
    password: string;
    schoolName: string;
    createdAt: Date;
    updatedAt: Date;
    role: UserRole;
}
export interface UserRole {
    id: number;
    roleName: string;
    rolePower: number;
}
export type UserCreateInput = Omit<User, "id" | "createdAt" | "updatedAt">;
export type UserUpdateInput = Partial<Omit<User, "id" | "createdAt" | "updatedAt">>;
