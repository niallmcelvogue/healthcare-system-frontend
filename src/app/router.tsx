import { useMemo } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

export const createAppRouter = () =>
    createBrowserRouter([
        {
            path: '/',
            lazy: async () => {
                const { LoginRoute } = await import('./routes/auth/login')
                return { Component: LoginRoute};
            }
        },
        {
            path: '/dashboard',
            lazy: async () => {
                const { AdminDashboardRoute } = await import('./routes/app/admin/admin-dashboard')
                return { Component: AdminDashboardRoute };
            }
        },
        {
            path: '*',
            lazy: async () => {
                const { NotFoundRoute } = await import('./routes/not-found')
                return { Component: NotFoundRoute };
            }
        }
    ]);

export const AppRouter = () => {
    const router = useMemo(() => createAppRouter(), [])

    return <RouterProvider router={router}/>;
}