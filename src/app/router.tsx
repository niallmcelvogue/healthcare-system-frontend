import { useMemo } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, useQueryClient } from "@tanstack/react-query"

export const createAppRouter = (queryClient: QueryClient) =>
    createBrowserRouter([
        {
            path: '/',
            lazy: async () => {
                const { LoginRoute } = await import('./routes/auth/login')
                return { Component: LoginRoute};
            }
        }
    ]);

export const AppRouter = () => {
    const queryClient = useQueryClient();
    const router = useMemo(() => createAppRouter(queryClient), [queryClient])

    return <RouterProvider router={router}/>;
}