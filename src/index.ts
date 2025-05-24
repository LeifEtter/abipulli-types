import { ApiResponse, PaginatedResponse } from "./types/api/responses";
import {
  Image,
  ChatMessage,
  Pullover,
  TextElement,
  UserRole,
} from "./types/models";
import { Chat } from "./types/models/chat";
import { Design, DesignSuggestion } from "./types/models/design";
import { Order } from "./types/models/order";
import { User } from "./types/models/user";

export * from "./types/models";
export * from "./types/errors/errorInfo";
export * from "./types/errors/errorMessages";
export * from "./types/api/responses";

export type UserResponse = ApiResponse<User>;
export type UsersResponse = PaginatedResponse<User>;
export type OrderResponse = ApiResponse<Order>;
export type OrdersResponse = PaginatedResponse<Order>;
export type DesignResponse = ApiResponse<Design>;
export type DesignsResponse = PaginatedResponse<Design>;
export type ChatResponse = ApiResponse<Chat>;
export type ChatsResponse = PaginatedResponse<Chat>;
export type ChatMessageResponse = ApiResponse<ChatMessage>;
export type ChatMessagesResponse = PaginatedResponse<ChatMessage>;
export type PulloverResponse = ApiResponse<Pullover>;
export type PulloversResponse = PaginatedResponse<Pullover>;
export type TextElementResponse = ApiResponse<TextElement>;
export type TextElementsResponse = PaginatedResponse<TextElement>;
export type ImageResponse = ApiResponse<Image>;
export type ImagesResponse = PaginatedResponse<Image>;
export type DesignSuggestionResponse = ApiResponse<DesignSuggestion>;
export type DesignSuggestionsResponse = PaginatedResponse<DesignSuggestion>;
export type UserRoleResponse = ApiResponse<UserRole>;
export type UserRolesResponse = PaginatedResponse<UserRole>;
