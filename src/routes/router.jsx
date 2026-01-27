import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../Layouts/RootLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
const router = createBrowserRouter([
    {
        path:"/",
        Component: RootLayout,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signUp',
                Component: SignUp
            }
        ]
    }
])

export default router;