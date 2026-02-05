import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../Layouts/RootLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddLostFound from "../pages/AddLostFound";
import AllLostFound from "../pages/AllLostFound";
import UpdateItems from "../pages/UpdateItems";
import MyItems from "../pages/MyItems";
import AllRecoveredItems from "../pages/AllRecoveredItems";
import PrivateRoute from "./PrivateRoute";
import ItemDetails from "../pages/itemDetails";
import ErrorPage from "../pages/ErrorPage";
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
                element: <PrivateRoute><AddLostFound/></PrivateRoute>
            },
            {
                path: '/allitems',
                Component: AllLostFound
            },
            {
                path: '/itemdetails/:id',
                element:<PrivateRoute><ItemDetails/></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:3000/details/${params.id}`)
            },
            {
                path: '/updateItems/:id',
                element:<PrivateRoute><UpdateItems/></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:3000/details/${params.id}`),
                hydrateFallbackElement:<span className="loading loading-infinity loading-xl"></span>
            },
            {
                path: '/myItems',
                element:<PrivateRoute><MyItems/></PrivateRoute>,
            },
            {
                path: '/allRecovered',
                element:<PrivateRoute><AllRecoveredItems/></PrivateRoute>
            },
            {
                path:'/*',
                Component: ErrorPage,
            }
        ]
    }
])

export default router;