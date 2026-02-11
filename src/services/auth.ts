import api from ".";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  };
}

export const authApi = {
  login: (payload: LoginPayload) =>
    api.post<AuthResponse>("/auth/login", payload),

  register: (payload: LoginPayload & { name: string }) =>
    api.post<AuthResponse>("/auth/register", payload),

  logout: () => api.post("/auth/logout"),

  me: () => api.get<AuthResponse["user"]>("/auth/me"),
};
