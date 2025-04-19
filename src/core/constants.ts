/**
 * Application-wide constants used throughout the codebase
 */

// API endpoints
export const API_ENDPOINTS = {
  TODOS: "todos",
} as const;

// Common HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_PREFERENCES: "user_preferences",
} as const;
