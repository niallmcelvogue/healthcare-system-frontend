import axios from "axios";

export const ApiClient = axios.create({
    baseURL: 'http://localhost:8080'
})

ApiClient.interceptors.request.use((config) => {
    console.log(config);
    if (config.url === '/auth/login') {
        return config;
    }
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})