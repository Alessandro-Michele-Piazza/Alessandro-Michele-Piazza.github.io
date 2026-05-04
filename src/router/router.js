import { createBrowserRouter } from "react-router";
import Homepage from "../views/Homepage";
import Contatti from "../views/Contatti";
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
            },
            {
                path: routes.contact,
                Component: Contatti
            }
        ]
    }
]);

export default router;