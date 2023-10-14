import { Col, Container, Row } from "react-bootstrap";
import { useState, useContext } from "react";
import { UsuariosContext } from "../Context/UserContext";
import Swal from "sweetalert2";
import "../Style/Login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [contraseña, setContraseña] = useState();

  const { users } = useContext(UsuariosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = users.find(
        (user) => user.email === email && user.contraseña === contraseña
      );
      if (user) {
        localStorage.setItem("usuario", JSON.stringify(user));
        const tagUsuario = JSON.parse(localStorage.getItem("usuario"));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bienvenido " + tagUsuario.nombre,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.href = "/inventario";
        }, 1000);
      } else {
        alert("Usuario no encontrado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="mainLogin">
      <Row>
        <Col lg={12}>
          <div className="cajaFormLogin">
            <div className="cajaFormInput">
              <form onSubmit={handleSubmit}>
                <h1 className="loginStockFlowH1">Inicia sesión</h1>
                <div className="inputBoxLogin">
                  <input
                    className="inputFromLogin"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo de Empresa"
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                </div>
                <div className="inputBoxLogin">
                  <input
                    className="inputFromLogin"
                    type="password"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    name="contraseña"
                    id="contraseña"
                    placeholder="Contraseña"
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-lock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <div className="forgetLogin">
                  <a href="#" className="preguntaOlvidarContraseña">
                    ¿Has olvidado tu contraseña?
                  </a>
                </div>
                <button type="submit" className="botonIngresarSesionLogin">
                  Ingresar
                </button>
                <div className="boxPreguntaRegistro">
                  <p className="preguntaNoTenesCuenta">
                    ¿No tienes una cuenta?
                  </p>
                  <a href="/register" className="linkRegistro">
                    Registrate
                  </a>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
