import { useContext, useEffect, useState } from "react";
import AuthContext from "./../context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { getReceta } from "../servicios/RecetaServices";

import { editarFoto } from "./../servicios/PanelService";

export const loader = async ({ params }) => {
    let datos = await getReceta(params.id);
    if (!datos) {
        window.location = "/error";
    }
    return datos;
};

export const PanelEditar = () => {
    const { handleValidaLogin } = useContext(AuthContext);
    useEffect(() => {
        return () => {
            handleValidaLogin();
        };
    }, []);
    const datos = useLoaderData();

    const [boton, setBoton] = useState("block");
    const [preloader, setPreloader] = useState("none");

    const recibirFormulario = async (e) => {
        e.preventDefault();

        setBoton("none");
        setPreloader("block");
        if ((await editarFoto(datos.id)) == 201) {
            alert("Se modificó el registro exitosamente");
        } else {
            alert("Se produjo un error inesperado");
        }
        window.location = location.href;
    };
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
                                <h2>Editar foto</h2>
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
                                <h3>
                                    Editar foto receta:{" "}
                                    <strong>{datos.nombre}</strong>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-8">
                            <div className="contact-form-area">
                                <form onSubmit={recibirFormulario}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <img
                                                src={datos.foto}
                                                alt=""
                                                style={{ width: "100px" }}
                                            />
                                            <hr />
                                        </div>

                                        <div className="col-lg-12">
                                            <label
                                                className="form-label"
                                                htmlFor="foto"
                                            >
                                                Foto
                                            </label>
                                            <input
                                                className="form-control"
                                                id="foto"
                                                type="file"
                                                placeholder="Foto"
                                            />
                                        </div>
                                        <div
                                            className="col-12 text-center"
                                            style={{ display: boton }}
                                        >
                                            <button
                                                className="btn delicious-btn mt-30"
                                                type="submit"
                                                title="Enviar"
                                            >
                                                Enviar
                                            </button>
                                        </div>
                                        <div
                                            className="col-12 text-center"
                                            style={{ display: preloader }}
                                        >
                                            <img
                                                src="/img/img/load.gif"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
