import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDom from "react-dom/client";
import { Home, loader as homeLoader } from "./paginas/Home";
import { About } from "./paginas/About";
import { Frontend } from "./componentes/Frontend";

import "../public/style.css";
import {
    RecetaDetalle,
    loader as recetaDetalleLoader,
} from "./paginas/RecetaDetalle";
import { Contacto } from "./paginas/Contacto";
import { Recetas, loader as recetasLoader } from "./paginas/Recetas";
import { Error404 } from "./paginas/Error404";
import {
    RecetasBuscador,
    loader as recetaBuscadorLoader,
} from "./paginas/RecetasBuscador";
import { Registro } from "./paginas/Registro";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { element: <Home />, index: true, loader: homeLoader },
            { element: <About />, path: "/nosotros" },
            { element: <Recetas />, path: "/recetas", loader: recetasLoader },
            {
                element: <RecetaDetalle />,
                path: "/recetas/detalle/:id",
                loader: recetaDetalleLoader,
            },
            {
                element: <RecetasBuscador />,
                path: "/recetas/buscador",
                loader: recetaBuscadorLoader,
            },
            { element: <Contacto />, path: "/contacto" },
            { element: <Registro />, path: "/registro" },
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
