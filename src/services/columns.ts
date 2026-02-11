import api from ".";

export interface Column {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  publishedAt: string;
}

export interface ColumnListParams {
  tag?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export const columnApi = {
  getAll: (params?: ColumnListParams) =>
    api.get<PaginatedResponse<Column>>("/columns", { params }),

  getById: (id: number) => api.get<Column>(`/columns/${id}`),

  getRecommended: () => api.get<Column[]>("/columns/recommended"),
};
