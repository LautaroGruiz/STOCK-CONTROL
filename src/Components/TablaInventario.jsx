import { useContext, useState } from "react";
import { ProductosContext } from "../Context/ProductContext";
import "../Style/TablaInventario.css";
import { Modal, Button } from "react-bootstrap";
import EditarProduct from "./EditarProduct";

const TablaInventario = () => {
  const { products, deleteProduct } = useContext(ProductosContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editProduct, setEditProduct] = useState();

  const handleEdit = (product) => {
    setEditProduct(product);
    handleShow();
  };

  return (
    <>
      {products && products.length > 0 ? (
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
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.nombreProducto}</td>
                <td>${product.precio}</td>
                <td>{product.stock}</td>
                <td className="tdBotonesAcciones">
                  <Button
                    className="botonEditarProductos"
                    onClick={() => handleEdit(products)}
                  >
                    Editar
                  </Button>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    id="modalEditProducto"
                  >
                    <Modal.Header
                      closeButton
                      className="modalHeaderAddProducto"
                    >
                      <Modal.Title>Editar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBodyAddProducto">
                      <EditarProduct editProduct={editProduct} />
                    </Modal.Body>
                  </Modal>
                  <button
                    className="botonEliminarProductos"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="noHayProductosDisponibles">No hay productos disponibles</h1>
      )}
    </>
  );
};

export default TablaInventario;
