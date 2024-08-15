import { ApiClient } from "@/api/api-client";

export const LoginApi = async (username: string, password: string) => await ApiClient.post('/auth/login', {username, password})