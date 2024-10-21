import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/LOgin";
import Register from "../pages/Register/Register";
import PropertyCard from "../pages/PropertyCard/PropertyCard";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/properties.json')
            },
            {
                path: '/properties/:id',
                element: <PrivateRoute><PropertyCard></PropertyCard></PrivateRoute>,
                loader: () => fetch('/properties.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;