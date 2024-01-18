import "../styles/App.css";
import Formulario from "./components/Formulario.jsx";
import ListaEstudiantes from "./components/ListaEstudiantes.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container text-center">
        <div className="row my-3">
          <Formulario />
          <ListaEstudiantes />
        </div>
      </div>
    </>
  );
};

export default App;
