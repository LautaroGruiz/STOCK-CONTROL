import "../Style/Products.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Components/Header";

const Products = () => {
  return (
    <>
      <Header />
      <Container fluid className="mainProducts">
        <Row>
          <Col xs={12} lg={12}>
            <div className="cajaDeFiltro">
              <input
                type="text"
                name=""
                id="inputSearchProduct"
                required="required"
              />
              <span className="spanInputSearch">Buscar</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
