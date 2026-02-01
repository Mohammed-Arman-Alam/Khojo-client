import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../Layouts/RootLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddLostFound from "../pages/AddLostFound";
import itemDetails from "../pages/itemDetails";
import AllLostFound from "../pages/AllLostFound";
import UpdateItems from "../pages/UpdateItems";
import MyItems from "../pages/MyItems";
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
            },
            {
                path: '/addItems',
                Component: AddLostFound
            },
            {
                path: '/allitems',
                Component: AllLostFound
            },
            {
                path: '/itemdetails/:id',
                Component: itemDetails,
                loader: ({params})=>fetch(`http://localhost:3000/details/${params.id}`)
            },
            {
                path: '/updateItems/:id',
                Component: UpdateItems,
                loader: ({params})=>fetch(`http://localhost:3000/details/${params.id}`)
            },
            {
                path: '/myItems',
                Component: MyItems,
            }
        ]
    }
])

export default router;