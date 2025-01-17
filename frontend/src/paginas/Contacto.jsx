import { useState } from "react";
import { sendData } from "../servicios/ContactoService";

export const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [boton, setBoton] = useState("inline-block");
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
        if (telefono == 0 || telefono == "") {
            alert("El telefono es obligatorio");
            setTelefono("");
            return false;
        }
        if (mensaje == 0 || mensaje == "") {
            alert("El mensaje es obligatorio");
            setMensaje("");
            return false;
        }

        setBoton("none");
        setPreloader("inline-block");
        if ((await sendData({ nombre, correo, telefono, mensaje })) == 201) {
            alert("Mensaje enviado correctamente");
        } else {
            alert("Error al enviar el mensaje");
        }

        window.location = "/contacto";
    };
    return (
        <>
            <div
                className="breadcumb-area bg-img bg-overlay"
                style={{ backgroundImage: "url(img/bg-img/breadcumb4.jpg)" }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-text text-center">
                                <h2>Contáctanos</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-information-area section-padding-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="logo mb-80">
                                <img
                                    src="img/core-img/logo2.png"
                                    alt=""
                                    style={{ width: "144px", height: "65ox" }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="row">
                                <div className="col-4">
                                    <div className="single-contact-information mb-30">
                                        <h6>Dirección:</h6>
                                        <p>
                                            481 Creekside Lane Avila <br />
                                            Beach, CA 93424
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="single-contact-information mb-30">
                                        <h6>Teléfonos:</h6>
                                        <p>
                                            +53 345 7953 32453 <br />
                                            +53 345 7557 822112
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="single-contact-information mb-30">
                                        <h6>E-Mail:</h6>
                                        <p>'yourmail@gmail.com'</p>
                                    </div>
                                </div>
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
                                <h3>Cuéntanos en qué te podemos ayudar!!</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="contact-form-area">
                                <form onSubmit={handleForm}>
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <input
                                                type="text"
                                                id="nombre"
                                                className="form-control"
                                                placeholder="Nombre..."
                                                value={nombre}
                                                onChange={(e) =>
                                                    setNombre(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input
                                                type="email"
                                                id="correo"
                                                className="form-control"
                                                placeholder="Correo..."
                                                value={correo}
                                                onChange={(e) =>
                                                    setCorreo(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input
                                                type="text"
                                                id="telefono"
                                                className="form-control"
                                                placeholder="Teléfono..."
                                                value={telefono}
                                                onChange={(e) =>
                                                    setTelefono(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <textarea
                                                id="mensaje"
                                                className="form-control"
                                                placeholder="Mensaje..."
                                                onChange={(e) =>
                                                    setMensaje(e.target.value)
                                                }
                                            ></textarea>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button
                                                className="btn delicious-btn mt-30"
                                                style={{ display: boton }}
                                                title="Enviar"
                                                type="submit"
                                            >
                                                Enviar
                                            </button>
                                        </div>
                                        <div className="col-12 text-center">
                                            <img
                                                src="/img/img/load.gif"
                                                alt="cargando..."
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
