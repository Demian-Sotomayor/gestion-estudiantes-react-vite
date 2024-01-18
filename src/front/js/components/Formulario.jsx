const Formulario = () => {
  return (
    <>
      <div className="col-md-5 mt-2">
        <form action="">
          <div className="card">
            <h5 className="card-header">Formulario</h5>
            <div className="card-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Documento:
                </span>
                <input type="number" className="form-control" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Nombre:
                </span>
                <input type="text" className="form-control" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Apellido:
                </span>
                <input type="text" className="form-control" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Teléfono:
                </span>
                <input type="tel" className="form-control" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Correo:
                </span>
                <input type="email" className="form-control" />
              </div>

              <div className="d-grid">
                <input type="submit" className="btn btn-success" />
                <input type="reset" className="btn btn-secondary mt-2" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
