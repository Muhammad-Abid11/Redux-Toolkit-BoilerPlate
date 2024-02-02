import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Redbox, Greenbox, Bluebox } from "../pages";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Redbox />,
    },
    {
        path: "/greenbox",
        element: <Greenbox />,
    },
    {
        path: "/bluebox",
        element: <Bluebox />,
    },
]);

export default function Routerconfig() {
    return <RouterProvider router={router} />
}