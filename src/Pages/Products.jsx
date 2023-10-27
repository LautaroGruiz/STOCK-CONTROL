import "../Style/Products.css";
import { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Header from "../Components/Header";
import { ProductosContext } from "../Context/ProductContext";
import TablaInventario from "../Components/tablaInventario";
import axios from "axios";
import Swal from "sweetalert2";

const Products = () => {
  const { getProductos } = useContext(ProductosContext); // Obtén la lista de productos y las funciones del contexto de productos

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState({
    nombreProducto: "",
    precio: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/products",
        product
      );
      if (response.status === 201) {
        setProduct({
          nombreProducto: "",
          precio: "",
          stock: "",
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Producto Editado",
          showConfirmButton: false,
          timer: 1500,
        });

        // Aquí, recargamos la lista de productos después de agregar uno nuevo.
        getProductos();
      } else {
        console.error(
          "Error al agregar producto. Respuesta del servidor:",
          response.status
        );
        // Manejar el error, mostrar un mensaje al usuario, etc.
      }
    } catch (error) {
      console.error("Error al agregar producto:", error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  };
  useEffect(() => {
    // Carga la lista de productos al montar el componente
    getProductos();
  }, []);

  return (
    <>
      <Header />
      <Container fluid className="mainProducts">
        <Row>
          <Col xs={12} lg={12}>
            <div className="divCajaInputBuscarBotonAdd">
              <div className="cajaDeFiltro">
                <input
                  type="text"
                  name=""
                  id="inputSearchProduct"
                  required="required"
                />
                <span className="spanInputSearch">Buscar</span>
              </div>
              <button className="botonAgregarProducto" onClick={handleShow}>
                Agregar Producto
              </button>
              <Modal show={show} onHide={handleClose} id="modalAddProducto">
                <Modal.Header closeButton className="modalHeaderAddProducto">
                  <Modal.Title>Ingresa los datos</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBodyAddProducto">
                  <form onSubmit={handleSubmit}>
                    <div className="cajaInputModalNombreProducto">
                      <input
                        type="text"
                        name="nombreProducto"
                        value={product.nombreProducto}
                        onChange={handleChange}
                        id="nombreDeProducto"
                        className="inputModalNameProducto"
                        maxLength="50"
                        required="required"
                      />
                      <span className="spanModalNameProducto">
                        Nombre de producto
                      </span>
                    </div>
                    <div className="cajaInputModalNombreProducto">
                      <input
                        type="number"
                        name="precio"
                        value={product.precio}
                        onChange={handleChange}
                        id="nombreDePrecio"
                        className="inputModalNameProducto"
                        maxLength="50"
                        required="required"
                      />
                      <span className="spanModalNameProducto">Precio</span>
                    </div>
                    <div className="cajaInputModalNombreProducto">
                      <input
                        type="number"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        id="stockDeProducto"
                        className="inputModalNameProducto"
                        maxLength="50"
                        required="required"
                      />
                      <span className="spanModalNameProducto">Stock</span>
                    </div>
                    <div className="modalFooterAddProducto">
                      <Button
                        onClick={handleClose}
                        className="cerrarModalAddProducto"
                      >
                        Cerrar
                      </Button>
                      <Button
                        type="submit"
                        className="añadirModalAddProducto"
                        onClick={handleClose}
                      >
                        Agregar producto
                      </Button>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <TablaInventario />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
