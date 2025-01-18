export const RecetaDetalle = () => {
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
                                <h2>dato.nombre</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="receipe-post-area section-padding-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img src="dato.foto" alt="dato.nombre" />
                        </div>
                    </div>
                </div>

                <div className="receipe-content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <div className="receipe-headline my-5">
                                    <span>dato.fecha</span>
                                    <h2>dato.nombre</h2>
                                    <div className="receipe-duration">
                                        <h6>Tiempo: dato.tiempo </h6>
                                        <h6>Categoría: dato.categoria</h6>
                                        <h6>Creada por: dato.usuario</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-lg-12">
                                <div className="single-preparation-step d-flex">
                                    <p>dato.descripcion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
