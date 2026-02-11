import api from ".";

export interface Food {
  id: number;
  name: string;
  category: "morning" | "lunch" | "dinner" | "snack";
  calories: number;
  image: string;
  date: string;
}

export interface FoodListParams {
  category?: Food["category"];
  page?: number;
  limit?: number;
  date?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export const foodApi = {
  getAll: (params?: FoodListParams) =>
    api.get<PaginatedResponse<Food>>("/foods", { params }),

  getById: (id: number) => api.get<Food>(`/foods/${id}`),

  create: (payload: Omit<Food, "id">) => api.post<Food>("/foods", payload),

  update: (id: number, payload: Partial<Omit<Food, "id">>) =>
    api.put<Food>(`/foods/${id}`, payload),

  delete: (id: number) => api.delete(`/foods/${id}`),
};
