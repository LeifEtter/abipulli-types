import { ApiResponse, PaginatedResponse } from "./types/api";
import { Chat } from "./types/chat";
import { Design } from "./types/design";
import { Order } from "./types/order";
import { User } from "./types/user";

export * from "./types/user";
export * from "./types/order";
export * from "./types/api";
export * from "./types/chat";
export * from "./types/design";

export type UserResponse = ApiResponse<User>;
export type UsersResponse = PaginatedResponse<User>;
export type OrderResponse = ApiResponse<Order>;
export type OrdersResponse = PaginatedResponse<Order>;
export type DesignResponse = ApiResponse<Design>;
export type DesignsResponse = PaginatedResponse<Design>;
export type ChatResponse = ApiResponse<Chat>;
