import Estudiante from "./Estudiante";

const ListaEstudiantes = ({ estudiante, listaEstudiantes, borrar, setEstudiante }) => {
  return (
    <>
      <div className="col-md-7 mt-2">
        <div className="card">
          <h5 className="card-header">Lista de estudiantes</h5>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Documento</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Telefono</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {listaEstudiantes && listaEstudiantes.length ? 
                (
                  listaEstudiantes.map(est => (
                    <Estudiante setEstudiante={setEstudiante} borrar={borrar} estudiante={est} key={est.id} />
                  ))
                  
                ) : (
                  <>
                    <tr>
                      <th colSpan={5} scope="row">
                        No hay estudiantes
                      </th>
                    </tr>
                  </>
                )}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaEstudiantes;
