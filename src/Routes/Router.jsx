import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/test",
        element: 'This is for test',
    }
]);