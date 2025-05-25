import { ErrorInfo } from "../errors/errorInfo.js";

export type Message = {
  message: string;
};

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: ErrorInfo;
};

export type PaginatedResponse<T> = ApiResponse<{
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}>;
