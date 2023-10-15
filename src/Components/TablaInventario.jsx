import "../Style/TablaInventario.css";

const TablaInventario = () => {
  return (
    <table className="tablaGeneralProductos">
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Stock</th>
          <th className="thAcciones">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td className="tdBotonesAcciones">
            <button className="botonEditarProductos">Editar</button>
            <button className="botonEliminarProductos">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablaInventario;
