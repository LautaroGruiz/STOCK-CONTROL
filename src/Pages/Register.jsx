import { Col, Container, Row } from "react-bootstrap";
import "../Style/Register.css";

const Register = () => {
  return (
    <Container fluid className="mainRegister">
      <Row>
        <Col lg={7}>
          <div className="cajaFromRegister">
            <div className="cajaFormInputRegister">
              <div className="titulosFromRegister">
                <h1 className="h1Registrate">Registrate</h1>
                <h3 className="h3ControlTotal">
                  Mejora tu eficiencia en el manejo de stock
                </h3>
              </div>
              <div className="cajaInputNameLastRegister">
                <input
                  type="text"
                  name=""
                  id="inputNameRegister"
                  required="required"
                />
                <span className="spanNameRegister">Nombre</span>
                <input
                  type="text"
                  name=""
                  id="inputLastNameRegister"
                  required="required"
                />
                <span className="spanLastNameRegister">Apellido</span>
              </div>
              <div className="cajaInputNameLastRegister">
                <input
                  type="text"
                  name=""
                  id="inputNameRegister"
                  required="required"
                />
                <span className="spanNameRegister">Nombre de empresa</span>
                <input
                  type="number"
                  name=""
                  id="inputLastNameRegister"
                  required="required"
                />
                <span className="spanLastNameRegister">Telefono</span>
              </div>
              <div className="cajaInputEmailRegister">
                <input
                  type="text"
                  name=""
                  id="inputEmailRegister"
                  required="required"
                />
                <span className="spanEmailRegister">Email</span>
              </div>
              <div className="cajaInputEmailRegister">
                <input
                  type="password"
                  name=""
                  id="inputEmailRegister"
                  required="required"
                />
                <span className="spanEmailRegister">Contraseña</span>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={5}>
          <div className="cajaImagenRegister">
            <div className="sombraImageRegister"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
