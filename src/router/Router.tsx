import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import { lazy } from "react";
import YaeLayout from "../layout/YaeLayout";
import YmeHomeComp from "../pages/YAE/YmeHome/YmeHomeComp";


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
        path: "/yme",
        element: <YaeLayout />,
        children: [
            {
                index: true,
                element: <YmeHomeComp />
            },
            {
                path: "register",
                element: <Register />
            },
            {
               path: "register/success",
               element: <Thanks /> 
            }
        ]
    }
])