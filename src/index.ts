import {
  ApiResponse,
  Message,
  PaginatedResponse,
} from "./types/api/responses.js";
import { ErrorInfo } from "./types/errors/errorInfo.js";
import {
  Image,
  ImageUploadResult,
  ChatMessage,
  Pullover,
  TextElement,
  UserRole,
  ImageWithPositionAndScale,
} from "./types/models/index.js";
import { Chat } from "./types/models/chat.js";
import { Design, DesignSuggestion } from "./types/models/design.js";
import { Order } from "./types/models/order.js";
import {
  User,
  UserCheckAuthResult,
  UserLoginResult,
} from "./types/models/user.js";

export * from "./types/models/index.js";
export * from "./types/errors/errorInfo.js";
export * from "./types/errors/errorMessages.js";
export * from "./types/api/responses.js";

export type MessageResponse = ApiResponse<Message>;
export type UserResponse = ApiResponse<User>;
export type UsersResponse = PaginatedResponse<User>;
export type UserLoginResponse = ApiResponse<UserLoginResult>;
export type UserCheckAuthResponse = ApiResponse<UserCheckAuthResult>;
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
export type ImageUploadResultResponse = ApiResponse<ImageUploadResult>;
export type ImagesResponse = PaginatedResponse<Image>;
export type ImagesForDesignResponse =
  PaginatedResponse<ImageWithPositionAndScale>;
export type DesignSuggestionResponse = ApiResponse<DesignSuggestion>;
export type DesignSuggestionsResponse = PaginatedResponse<DesignSuggestion>;
export type UserRoleResponse = ApiResponse<UserRole>;
export type UserRolesResponse = PaginatedResponse<UserRole>;

export type ErrorResponse = ApiResponse<ErrorInfo>;
