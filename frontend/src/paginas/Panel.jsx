import React from 'react'

export const Panel = () => {
  return (
    <>
      <div className="breadcumb-area bg-img bg-overlay" style={{ backgroundImage: "url(img/bg-img/breadcumb6.jpg)" }}>
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
                <a className="btn delicious-btn"><i className="fas fa-plus"></i> Crear</a>
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
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
