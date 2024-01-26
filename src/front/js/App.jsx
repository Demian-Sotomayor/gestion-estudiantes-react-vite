/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import "../styles/App.css";
import Formulario from "./components/Formulario.jsx";
import ListaEstudiantes from "./components/ListaEstudiantes.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {

  const [estudiante, setEstudiante] = useState({});
  const [estudiantes, setEstudiantes] = useState(JSON.parse(localStorage.getItem('estudiantes')) ?? []);

  useEffect(() => {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
  }, [estudiantes])

  return (
    <>
      <Navbar />
      <div className="container text-center">
        <div className="row my-3">
          <Formulario estudiante={estudiante} estudiantes={estudiantes} setEstudiantes={setEstudiantes} />
          <ListaEstudiantes estudiante={estudiante} estudiantes={estudiantes} />
        </div>
      </div>
    </>
  );
};

export default App;
