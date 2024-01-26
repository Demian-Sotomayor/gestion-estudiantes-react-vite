import { useState } from "react";
import Error from "./Error";

const Formulario = ({ setEstudiantes, estudiantes }) => {

  const [documento, setDocumento] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [error, setError] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();

    // Validar campos
    if([documento, nombre, apellido, correo, telefono].includes('')) {
      setError(true);
      return;
    } else {
      setError(false)
    }

    // Guardando
    const obj = {documento, nombre, apellido, correo, telefono}
    setEstudiantes([...estudiantes, obj])

  }

  return (
    <>
      <div className="col-md-5 mt-2">
        <form onSubmit={enviarFormulario}>
          <div className="card">
            <h5 className="card-header">Formulario</h5>
            {error && <Error mensaje='Todos los campos son obligatorios' />}
            <div className="card-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Documento:
                </span>
                <input type="number" className="form-control" value={documento} onChange={(e) => setDocumento(e.target.value)} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Nombre:
                </span>
                <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)}  />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Apellido:
                </span>
                <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)}  />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Teléfono:
                </span>
                <input type="tel" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Correo:
                </span>
                <input type="email" className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)}  />
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
