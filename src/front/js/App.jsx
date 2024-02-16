import { useEffect, useState } from "react";
import "../styles/App.css";
import Formulario from "./components/Formulario.jsx";
import ListaEstudiantes from "./components/ListaEstudiantes.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const [estudiante, setEstudiante] = useState({});
  const [listaEstudiantes, setListaEstudiantes] = useState(
    JSON.parse(localStorage.getItem("estudiantes")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("estudiantes", JSON.stringify(listaEstudiantes));
  }, [listaEstudiantes]);

  const borrar = (id) => {
    if (confirm("¿Desea eliminarlo?")) {
      const nuevo = listaEstudiantes.filter((est) => est.id !== id);
      setListaEstudiantes(nuevo);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container text-center">
        <div className="row my-3">
          <Formulario
            estudiante={estudiante}
            listaEstudiantes={listaEstudiantes}
            setEstudiante={setEstudiante}
            setListaEstudiantes={setListaEstudiantes}
          />
          <ListaEstudiantes
            setEstudiante={setEstudiante}
            estudiante={estudiante}
            listaEstudiantes={listaEstudiantes}
            borrar={borrar}
          />
        </div>
      </div>
    </>
  );
};

export default App;
