import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Shuva from "../components/Shuva/Shuva";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/test",
        element: 'This is for test',
    },
    {
        path: "/shuva",
        element: <Shuva></Shuva>
    }
]);