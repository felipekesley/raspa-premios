import axios, { type AxiosInstance, type AxiosResponse } from "axios";

export const http: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function apiRequest<T>(
  config: Parameters<AxiosInstance["request"]>[0]
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await http.request<T>(config);
    return response.data;
  } catch (error) {
    throw new Error("error occurred", error as Error).message;
  }
}
