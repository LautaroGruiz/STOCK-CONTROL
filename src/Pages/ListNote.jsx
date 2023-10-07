import { Container, Row, Col } from "react-bootstrap";
import "../Style/ListNote.css";
import personaTrabajando from "../Image/LIST-NOTA/hombre-negro-trabajando.png";

const ListNote = () => {
  return (
    <Container fluid className="mainListNote">
      <Row>
        <Col xs={12} lg={4}>
          <div className="cajaCrearNotas">
            <h2 className="CreaTuNotaH2">Crear nueva nota</h2>
            <div className="cajaInputNota">
              <label className="tittleTaskName">Nombre de nota</label>
              <input placeholder="Agregar nota" className="AddTaksInput" />
              <button className="buttonCreateTask">Crear nota</button>
              <img src={personaTrabajando} className="personaTrabajando" alt="" />
            </div>
          </div>
        </Col>
        <Col xs={12} lg={8}>
          <div className="cajaMostrarNotas"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default ListNote;
