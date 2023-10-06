import { Col, Container, Row } from "react-bootstrap";
import logoLogin from "../Image/LOGIN/logoLogin2.png";
import imagenCaja from "../Image/LOGIN/imagenCaja.png";
import { useNavigate } from "react-router-dom";
import "../Style/Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="mainLogin">
      <Row>
        <Col lg={6}>
          <div className="cajaLogoLogin">
            <div className="cardLogoLogin">
              <div className="circule">
                <img src={logoLogin} className="imagenLogo" />
              </div>
              <div className="cajaTextoLogoLogin">
                <h2 className="h2StockFlowLogo">Stock flow</h2>
                <p className="preguntaEstasBuscando">
                  ¿Estás buscando simplificar la gestión de inventario de tu
                  negocio y aumentar la eficiencia de tu operación?
                </p>
                <p className="noBusquesMas">¡No busques más!</p>
                <p className="preguntaEstasBuscando">
                  Stock Flow es la respuesta que necesitas.
                </p>
              </div>
              <img src={imagenCaja} className="imagenCaja" />
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="linkLogin-Presentacion">
            <div className="linkLoginHome">
                <a href="" onClick={() => navigate("/login")} className="botonLoginHome">Inicia sesión</a>
                <a href="" onClick={() => navigate("/register")} className="botonLoginHome">Registrate</a>
            </div>
            <h1 className="somosTuMejorEleccion">¡Somos tu mejor eleccion!</h1>
            <div className="cajaLlevaTuNegocio">
              <h3 className="llevaTuNegocio">
                Lleva tu negocio al siguiente nivel
              </h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
