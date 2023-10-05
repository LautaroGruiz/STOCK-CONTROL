import "../Style/Products.css";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  return (
    // <>
    //   <main className="mainProducts">
    //     <div className="cajaDeFiltro">
    //       <input
    //         type="text"
    //         name=""
    //         id="inputSearchProduct"
    //         required="required"
    //       />
    //       <span className="spanInputSearch">Buscar</span>
    //     </div>
    //     <section className="cajaMostrarProductos"></section>
    //   </main>
    // </>
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
          <section className="cajaMostrarProductos"></section>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
{
  /* <main className="mainProducts">
            <div className="cajaDeFiltro">
              <input
                type="text"
                name=""
                id="inputSearchProduct"
                required="required"
              />
              <span className="spanInputSearch">Buscar</span>
            </div>
            <section className="cajaMostrarProductos"></section>
          </main> */
}
