import React from "react";

export const Footer = () => {
    const fecha = new Date();
    const anho = fecha.getFullYear();

    return (
        <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
            <p>
                Todos los derechos reservados {anho} | Desarrollado por{" "}
                <a
                    href="https://blonder413.wordpress.com/"
                    title="Blonder413"
                    target="_blank"
                >
                    Blonder413
                </a>
            </p>
        </footer>
    );
};
