import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getDatosHome } from "../servicios/HomeServices";

export const loader = async () => {
    const datos = await getDatosHome();
    return datos;
};

export const Home = () => {
    const datos = useLoaderData();
    return (
        <>
            <div
                className="breadcumb-area bg-img bg-overlay"
                style={{ backgroundImage: "url(img/bg-img/breadcumb3.jpg)" }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-text text-center">
                                <h2>
                                    {import.meta.env.VITE_APP_NAME} -
                                    Desarrollado con React 18{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="top-catagory-area section-padding-80-0">
                <div className="container"></div>
            </section>
            <section className="best-receipe-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h3>Últimas recetas publicadas </h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {datos.map((dato) => (
                            <div
                                className="col-12 col-sm-6 col-lg-4"
                                key={dato.id}
                            >
                                <div className="single-best-receipe-area mb-30">
                                    <img
                                        src={dato.foto}
                                        alt={dato.nombre}
                                        className="foto-mini"
                                    />
                                    <div className="receipe-content">
                                        <Link
                                            to={`recetas/detalle/${dato.id}`}
                                            title={dato.nombre}
                                        >
                                            <h5>{dato.nombre}</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
