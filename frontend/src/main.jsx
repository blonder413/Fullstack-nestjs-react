import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDom from "react-dom/client";
import { Home } from "./paginas/Home";
import { About } from "./paginas/About";
import { Frontend } from "./componentes/Frontend";

import "../public/style.css";
import { RecetaDetalle } from "./paginas/RecetaDetalle";
import { Contacto } from "./paginas/Contacto";
import { Recetas } from "./paginas/Recetas";
import { Error404 } from "./paginas/Error404";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { element: <Home />, index: true },
            { element: <About />, path: "/nosotros" },
            { element: <Recetas />, path: "/recetas" },
            { element: <RecetaDetalle />, path: "/recetas/detalle" },
            { element: <Contacto />, path: "/contacto" },
            { element: <Error404 />, path: "*" },
        ],
        element: <Frontend />,
    },
]);

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
