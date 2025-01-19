export const Contacto = () => {
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
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
