import { AxiosResponse } from "axios";

/**
 * Typed API response extending AxiosResponse
 */
export interface ApiResponse<T> extends AxiosResponse {
  data: T;
}

/**
 * Error response structure
 */
export interface ApiErrorResponse {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

/**
 * Pagination metadata structure
 */
export interface PaginationMeta {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
}

/**
 * Paginated response structure
 */
export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}
