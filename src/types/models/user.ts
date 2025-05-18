import { UserRole } from "./role";

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  schoolName: string;
  createdAt: Date;
  updatedAt: Date;
  role: UserRole;
}

export type UserCreateInput = Omit<User, "id" | "createdAt" | "updatedAt">;
export type UserUpdateInput = Partial<Omit<User, "id">> & { id: string };
