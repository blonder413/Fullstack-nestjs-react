import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import Modal from "react-bootstrap/Modal";
import {
    editarReceta,
    eliminarReceta,
    guardarReceta,
} from "../servicios/PanelService";

export const Panel = () => {
    const { handleValidaLogin } = useContext(AuthContext);
    const [datos, setDatos] = useState([]);
    const [categorias, setCategorias] = useState([]);
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
        const getCategorias = async () => {
            const info = await fetch(
                `${import.meta.env.VITE_API_URL}categorias`,
                {
                    headers: { "content-type": "json/application" },
                }
            );
            setCategorias(await info.json());
        };

        return () => {
            handleValidaLogin();
            getRecetas();
            getCategorias();
        };
    }, []);

    const [show, setShow] = useState(false);

    const [nombre, setNombre] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoriaId, setCategoriaId] = useState("");
    const [accion, setAccion] = useState(1);
    const [accionId, setAccionId] = useState();

    const handleCrear = () => {
        setAccion(1);
        setNombre("");
        setTiempo("");
        setDescripcion("");
        setCategoriaId(0);
        setShow(!show);
    };
    const handleEditar = async (receta) => {
        setAccion(2);
        setAccionId(receta.id);
        setNombre(receta.nombre);
        setTiempo(receta.tiempo);
        setDescripcion(receta.descripcion);
        setCategoriaId(receta.categoria_id);

        setShow(!show);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (categoriaId == 0) {
            alert("debe seleccionar una categoría");
            return false;
        }
        if (nombre == 0 || nombre == "") {
            alert("el nombre es obligatorio");
            return false;
        }
        if (tiempo == 0 || tiempo == "") {
            alert("el tiempo es obligatorio");
            return false;
        }
        if (descripcion == 0 || descripcion == "") {
            alert("la descripción es obligatoria");
            return false;
        }
        if (accion == 1) {
            try {
                await guardarReceta(tiempo, categoriaId, descripcion, nombre);
                alert("Receta creada exitosamente");
            } catch (error) {
                alert("Error al guardar la receta: " + error);
            }
        } else if (accion == 2) {
            try {
                await editarReceta(
                    { nombre, tiempo, descripcion, categoria_id: categoriaId },
                    accionId
                );
                alert("Receta editada exitosamente");
            } catch (error) {
                alert("Error al editar la receta: " + error);
            }
        }
        window.location = "/panel";
    };

    const handleEliminar = async (id) => {
        if (window.confirm("Desea eliminar este registro?")) {
            try {
                await eliminarReceta(id);
                alert("Registro eliminado");
            } catch (error) {
                alert(`Error: ${error}`);
            }
            window.location = "/panel";
        }
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
                                <button
                                    className="btn delicious-btn"
                                    onClick={handleCrear}
                                >
                                    <i className="fas fa-plus"></i> Crear
                                </button>
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
                                                    <button
                                                        className="btn btn-link"
                                                        title="Editar"
                                                        onClick={() =>
                                                            handleEditar(dato)
                                                        }
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </button>

                                                    <button
                                                        className="btn btn-link text-danger"
                                                        title="Eliminar"
                                                        onClick={() =>
                                                            handleEliminar(
                                                                dato.id
                                                            )
                                                        }
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
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
            <Modal onHide={handleCrear} show={show} size="lg" id="crearModal">
                <Modal.Header>
                    <Modal.Title>
                        <h2>{accion == 1 ? "Crear" : "Editar"}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="row gy-3">
                            <div className="col-lg-12">
                                <label htmlFor="categoria_id">Categoría</label>
                                <select
                                    id="categoria_id"
                                    className="form-control"
                                    onChange={(e) =>
                                        setCategoriaId(e.target.value)
                                    }
                                    value={categoriaId}
                                >
                                    <option value="0">Selecione...</option>
                                    {categorias.map((categoria) => (
                                        <option
                                            key={categoria.id}
                                            value={categoria.id}
                                        >
                                            {categoria.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    placeholder="Nombre"
                                    type="text"
                                    id="nombre"
                                    className="form-control"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="tiempo">Tiempo</label>
                                <input
                                    type="text"
                                    id="tiempo"
                                    className="form-control"
                                    placeholder="Tiempo"
                                    value={tiempo}
                                    onChange={(e) => setTiempo(e.target.value)}
                                />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="descripcion">Descripción</label>
                                <textarea
                                    className="form-control"
                                    id="descripcion"
                                    value={descripcion}
                                    onChange={(e) =>
                                        setDescripcion(e.target.value)
                                    }
                                ></textarea>
                            </div>
                            {accion == 1 && (
                                <div className="col-lg-12">
                                    <label htmlFor="foto">Foto</label>
                                    <input
                                        type="file"
                                        id="foto"
                                        className="form-control"
                                    />
                                </div>
                            )}
                        </div>
                        <hr />
                        <div className="row d-flex justify-content-center">
                            <button className="btn btn-warning" title="Guardar">
                                {accion == 1 ? (
                                    <>
                                        <i className="fas fa-plus"></i> Crear
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-pencil-alt"></i>{" "}
                                        Editar
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};
