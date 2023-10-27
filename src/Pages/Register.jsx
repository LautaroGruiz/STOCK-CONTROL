import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import "../Style/Register.css";

const Register = () => {
  const [dataUser, setDataUser] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    telefono: "",
    email: "",
    contraseña: "",
    productos: [],
  });

  const handleChange = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value }); //Actualizo con valor del input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:8080/users", dataUser);
      console.log(response.dataUser);
      setDataUser({
        nombre: "",
        apellido: "",
        empresa: "",
        telefono: "",
        email: "",
        contraseña: "",
        productos: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="mainRegister">
      <Row>
        <Col lg={7}>
          <div className="cajaFromRegister">
            <div className="cajaFormInputRegister">
              <div className="titulosFromRegister">
                <h1 className="h1Registrate">Formulario de registro</h1>
                <h3 className="h3ControlTotal">
                  Mejora tu eficiencia en el manejo de stock
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="formRegister">
                <div className="cajaInputNameLastRegister">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="inputNameRegister"
                    pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                    maxLength="50"
                    required="required"
                    value={dataUser.nombre}
                    onChange={handleChange}
                  />
                  <span className="spanNameRegister">Nombre</span>
                  <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    className="inputLastNameRegister"
                    pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                    maxLength="50"
                    required="required"
                    value={dataUser.apellido}
                    onChange={handleChange}
                  />
                  <span className="spanLastNameRegister">Apellido</span>
                </div>
                <div className="cajaInputNameLastRegister">
                  <input
                    type="text"
                    name="empresa"
                    id="nombreDeEmpresa"
                    className="inputNameEmpresaRegister"
                    pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                    maxLength="50"
                    required="required"
                    value={dataUser.empresa}
                    onChange={handleChange}
                  />
                  <span className="spanNameEmpresaRegister">
                    Nombre de empresa
                  </span>
                  <input
                    type="text"
                    name="telefono"
                    id="telefono"
                    className="inputNumberRegister"
                    pattern="[0-9]{7,15}"
                    maxLength="15"
                    required="required"
                    value={dataUser.telefono}
                    onChange={handleChange}
                  />
                  <span className="spanNumberRegister">Telefono</span>
                </div>
                <div className="cajaInputEmailRegister">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="inputEmailRegister"
                    autoComplete="on"
                    maxLength="76"
                    required="required"
                    value={dataUser.email}
                    onChange={handleChange}
                  />
                  <span className="spanEmailRegister">Email</span>
                </div>
                <div className="cajaInputEmailRegister">
                  <input
                    type="password"
                    name="contraseña"
                    id="contraseña"
                    className="inputContraseñaRegister"
                    required="required"
                    value={dataUser.contraseña}
                    onChange={handleChange}
                  />
                  <span className="spanContraseñaRegister">Contraseña</span>
                </div>
                <button className="butonRegistrarseRegister" type="submit">
                  Registrarse
                </button>
              </form>
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
