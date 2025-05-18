import { ApiError } from "../errors/ApiError";

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: ApiError;
};

export type PaginatedResponse<T> = ApiResponse<{
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}>;
