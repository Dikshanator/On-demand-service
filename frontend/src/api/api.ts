import axios from "axios";

const api = axios.create({

    baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
});

export const authApi = {
    register: async (userData: any) => {
        const response = await api.post("/auth/register", userData);
        return response.data;
    },

    login: async (email: string, password: string) => {
        const response = await api.post("/auth/login", {
            email,
            password
        });
        return response.data;
    }
}

export default api;