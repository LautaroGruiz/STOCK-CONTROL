import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/App.css";
import Rutas from "./Components/Routes/Rutas";
import Header from "./Components/Routes/Header";

const App = () => {
  return (
    <>
      <Header />
      <Rutas />
    </>
  );
};

export default App;
