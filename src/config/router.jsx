import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Redbox, Greenbox, Bluebox } from "../pages";
import { ViewPost } from "../ViewPost";
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
    {
        path: "/rtkquery",
        element: <ViewPost />,
    },
]);

export default function Routerconfig() {
    return <RouterProvider router={router} />
}