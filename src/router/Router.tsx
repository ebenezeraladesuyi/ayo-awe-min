import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import { lazy } from "react";
import YaeLayout from "../layout/YaeLayout";


const AyoAweHome = lazy(() => import("../pages/Home/AyoAweHome"))
const Register = lazy(() => import("../pages/YAE/Register"))
const Thanks = lazy(() => import("../pages/YAE/Thanks"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <AyoAweHome />
            }
        ]
    },
    {
        path: "/yme/register",
        element: <YaeLayout />,
        children: [
            {
                index: true,
                element: <Register />
            },
            {
               path: "success",
               element: <Thanks /> 
            }
        ]
    }
])