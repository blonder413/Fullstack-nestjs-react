import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDom from "react-dom/client";
import { Home } from "./paginas/Home";
import { Frontend } from "./componentes/Frontend";

import "../public/style.css";

const router = createBrowserRouter([
    {
        path: "/",
        children: [{ element: <Home />, index: true }],
        element: <Frontend />,
    },
]);

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
