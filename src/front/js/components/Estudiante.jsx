const Estudiante = ({ estudiante }) => {

    const {documento, nombre, apellido, correo, telefono} = estudiante;

  return (
    <tr>
      <th scope="row">{documento}</th>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{correo}</td>
      <td>{telefono}</td>
    </tr>
  );
};

export default Estudiante;
