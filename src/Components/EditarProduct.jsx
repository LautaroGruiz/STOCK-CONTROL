import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import "../Style/EditarProduct.css";
import { ProductosContext } from "../Context/ProductContext";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const EditarProduct = ({ editProduct }) => {
  const { putProducto } = useContext(ProductosContext);

  const [producto, setProducto] = useState(editProduct[0]);

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    putProducto(producto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto Editado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <Container fluid >
        <Row>
          <Col>
            <form className="formEditarProducto" onSubmit={handleEdit}>
              <div className="cajaInputModalEditarNombreProducto">
                <span className="spanEditarModal">Nombre de producto</span>
                <input
                  type="text"
                  name="nombreProducto"
                  value={producto.nombreProducto}
                  onChange={handleChange}
                  id="EditarnombreDeProducto"
                  className="inputModalEditarNameProducto"
                  maxLength="50"
                  required="required"
                />
              </div>
              <div className="cajaInputModalEditarNombreProducto">
                <span className="spanEditarModal">Precio</span>
                <input
                  type="number"
                  name="precio"
                  value={producto.precio}
                  onChange={handleChange}
                  id="EditarPrecio"
                  className="inputModalEditarPrecioProducto"
                  required="required"
                />
              </div>
              <div className="cajaInputModalEditarNombreProducto">
                <span className="spanEditarModal">Stock</span>
                <input
                  type="number"
                  name="stock"
                  value={producto.stock}
                  onChange={handleChange}
                  id="EditarStock"
                  className="inputModalEditarStockProducto"
                  required="required"
                />
              </div>
              <div className="modalFooterAddProducto">
                {/* <Button
                  onClick={handleClose}
                  className="cerrarModalAddProducto"
                >
                  Cerrar
                </Button> */}
                <Button
                  type="submit"
                  className="añadirModalAddProducto"
                >
                  Editar producto
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditarProduct;
