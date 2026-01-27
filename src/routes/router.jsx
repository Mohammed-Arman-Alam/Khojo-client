import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../Layouts/RootLayout";
const router = createBrowserRouter([
    {
        path:"/",
        Component: RootLayout,
        children:[
            {
                index: true,
                Component: Home
            }
        ]
    }
])

export default router;