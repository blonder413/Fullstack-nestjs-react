import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

export const Panel = () => {
    const { handleValidaLogin } = useContext(AuthContext);
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        const getRecetas = async () => {
            const info = await fetch(
                `${
                    import.meta.env.VITE_API_URL
                }recetas/recetas-usuario/${localStorage.getItem(
                    "recetas_flaites_id"
                )}`,
                {
                    headers: {
                        "content-type": "json/application",
                        Authorization: `Bearer ${localStorage.getItem(
                            "recetas_flaites_token"
                        )}`,
                    },
                }
            );
            setDatos(await info.json());
        };

        return () => {
            handleValidaLogin();
            getRecetas();
        };
    }, []);

    return (
        <>
            <div
                className="breadcumb-area bg-img bg-overlay"
                style={{ backgroundImage: "url(img/bg-img/breadcumb6.jpg)" }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-text text-center">
                                <h2>Panel</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-area section-padding-0-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h3>Mis recetas publicadas</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="receipe-ratings text-right my-5">
                                <a className="btn delicious-btn">
                                    <i className="fas fa-plus"></i> Crear
                                </a>
                            </div>
                        </div>
                        <hr />
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Categoría</th>
                                            <th>Nombre</th>
                                            <th>Tiempo</th>
                                            <th>Detalle</th>
                                            <th>Foto</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datos.map((dato) => (
                                            <tr key={dato.id}>
                                                <td>{dato.id}</td>
                                                <td>{dato.categoria}</td>
                                                <td>{dato.nombre}</td>
                                                <td>{dato.tiempo}</td>
                                                <td>{dato.descripcion}</td>
                                                <td className="text-center">
                                                    <Link
                                                        to={dato.foto}
                                                        data-fancybox
                                                        data-caption="Single image"
                                                        className="lightbox d-block"
                                                    >
                                                        <img
                                                            src={dato.foto}
                                                            alt={dato.nombre}
                                                            width={50}
                                                            title={dato.nombre}
                                                        />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link
                                                        className="mr-2"
                                                        title="Editar Foto"
                                                        to={`/panel-editar/${dato.id}`}
                                                    >
                                                        <i className="fas fa-pen-square"></i>
                                                    </Link>
                                                    <Link
                                                        className="mr-2"
                                                        title="Editar"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </Link>
                                                    <Link
                                                        className="mr-2"
                                                        title="Eliminar"
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
