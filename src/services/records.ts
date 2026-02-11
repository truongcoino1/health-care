import api from ".";

export interface BodyRecord {
  id: number;
  date: string;
  weight: number;
  bodyFat: number;
}

export interface Exercise {
  id: number;
  name: string;
  calories: number;
  duration: number; // minutes
  date: string;
}

export interface DiaryEntry {
  id: number;
  title: string;
  content: string;
  date: string;
}

export type ChartFilter = "day" | "week" | "month" | "year";

export const recordApi = {
  // Body records
  getBodyRecords: (filter?: ChartFilter) =>
    api.get<BodyRecord[]>("/records/body", { params: { filter } }),

  createBodyRecord: (payload: Omit<BodyRecord, "id">) =>
    api.post<BodyRecord>("/records/body", payload),

  getExercises: (page?: number, limit?: number) =>
    api.get<Exercise[]>("/records/exercises", { params: { page, limit } }),

  createExercise: (payload: Omit<Exercise, "id">) =>
    api.post<Exercise>("/records/exercises", payload),

  getDiaryEntries: (page?: number, limit?: number) =>
    api.get<DiaryEntry[]>("/records/diary", { params: { page, limit } }),

  createDiaryEntry: (payload: Omit<DiaryEntry, "id">) =>
    api.post<DiaryEntry>("/records/diary", payload),

  updateDiaryEntry: (id: number, payload: Partial<Omit<DiaryEntry, "id">>) =>
    api.put<DiaryEntry>(`/records/diary/${id}`, payload),

  deleteDiaryEntry: (id: number) => api.delete(`/records/diary/${id}`),
};
