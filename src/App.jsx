import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/App.css";
import Rutas from "./Routes/Rutas";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Rutas />
    </>
  );
};

export default App;
