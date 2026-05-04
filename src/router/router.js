import { createBrowserRouter } from "react-router";
import Homepage from "../views/Homepage";
import Layout from "../views/layouts/Layout";
import routes from "./routes";

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        children: [
            {
                index: true,
                Component: Homepage
            }
        ]
    }
]);

export default router;