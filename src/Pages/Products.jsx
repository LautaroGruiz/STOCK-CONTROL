import "../Style/Products.css";
import { Container, Row, Col } from "react-bootstrap";
import CardProduct from "../Components/CardProduct";

const Products = () => {
  return (
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
          <section className="cajaMostrarProductos">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
