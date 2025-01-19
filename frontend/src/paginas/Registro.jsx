import { useState } from "react";
import { sendDataRegistro } from "../servicios/AccesoService";

export const Registro = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [boton, setBoton] = useState("block");
    const [preloader, setPreloader] = useState("none");
    const handleForm = async (e) => {
        e.preventDefault();
        if (nombre == 0 || nombre == "") {
            alert("El nombre es obligatorio");
            setNombre("");
            return false;
        }
        if (correo == 0 || correo == "") {
            alert("El correo es obligatorio");
            setCorreo("");
            return false;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(correo)) {
            alert("El correo es inválido");
            setCorreo("");
            return false;
        }
        if (password == 0 || password == "") {
            alert("El password es obligatorio");
            setPassword("");
            return false;
        }

        setBoton("none");
        setPreloader("inline-block");

        if ((await sendDataRegistro({ nombre, correo, password })) == 201) {
            alert(
                "Registrado exitosamente. Se ha enviado correo de verificación"
            );
        } else {
            alert("Se produjo un erro al registrarse");
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
                                <h2>Registro</h2>
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
                                <h3>Regístrate</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-8">
                            <div className="contact-form-area">
                                <form onSubmit={handleForm}>
                                    <div className="row">
                                        <div className="col-12 col-log-6">
                                            <input
                                                type="text"
                                                id="nombre"
                                                placeholder="Nombre:"
                                                className="form-control"
                                                value={nombre}
                                                onChange={(e) =>
                                                    setNombre(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="col-12 col-log-6">
                                            <input
                                                type="text"
                                                id="correo"
                                                placeholder="E-Mail:"
                                                className="form-control"
                                                value={correo}
                                                onChange={(e) =>
                                                    setCorreo(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="col-12 col-log-6">
                                            <input
                                                type="password"
                                                id="password"
                                                placeholder="Contraseña:"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div
                                            className="col-12 text-center"
                                            style={{ display: boton }}
                                        >
                                            <button
                                                type="submit"
                                                className="btn delicious-btn mt-30"
                                                title="Enviar"
                                            >
                                                Enviar
                                            </button>
                                        </div>

                                        <div className="col-12 text-center mt-30">
                                            <img
                                                src="/img/img/load.gif"
                                                alt="Enviando..."
                                                style={{
                                                    display: preloader,
                                                    height: "4em",
                                                }}
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
