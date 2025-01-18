export const Recetas = () => {
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
                                <h2>Recetas</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="top-catagory-area section-padding-80-0">
                <div className="container">
                    <div className="receipe-post-search mb-80">
                        <div className="container">
                            <form>
                                <div className="row">
                                    <div className="col-12 col-lg-4"></div>

                                    <div className="col-12 col-lg-4"></div>

                                    <div className="col-12 col-lg-3 text-right"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="best-receipe-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h3>Todas nuestras recetas</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row"></div>
                </div>
            </section>
        </>
    );
};
