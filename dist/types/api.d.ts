export type ApiResponse<T> = {
    success: boolean;
    data?: T;
    error?: string;
};
export type PaginatedResponse<T> = ApiResponse<{
    items: T[];
    total: number;
    page: number;
    pageSize: number;
}>;
export type ApiError = {
    code: string;
    message: string;
    details?: unknown;
};
