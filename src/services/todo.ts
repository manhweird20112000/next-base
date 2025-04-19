import { HttpService } from "@/core/api/service";
import { API_ENDPOINTS } from "@/core/constants";
import { ApiResponse } from "@/core/api/types";

/**
 * Todo item interface
 */
export interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

/**
 * Service for interacting with Todo API endpoints
 */
export class TodoService {
  private readonly api: HttpService;

  constructor() {
    this.api = new HttpService();
  }

  /**
   * Fetches all todos
   * @returns Promise with todos array
   */
  async getTodos(): Promise<ITodo[]> {
    const response = (await this.api.get<{ params?: unknown }>(
      API_ENDPOINTS.TODOS
    )) as ApiResponse<ITodo[]>;
    return response as unknown as ITodo[];
  }

  /**
   * Fetches a specific todo by ID
   * @param todoId - The ID of the todo to fetch
   * @returns Promise with todo data
   */
  async getDetailTodo(todoId: number): Promise<ITodo> {
    const response = (await this.api.get<{ params?: unknown }>(
      `${API_ENDPOINTS.TODOS}/${todoId}`
    )) as ApiResponse<ITodo>;
    return response as unknown as ITodo;
  }
}
