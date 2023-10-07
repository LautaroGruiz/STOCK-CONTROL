import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/App.css";
// import Rutas from "./Routes/Rutas";
import Header from "../src/Components/Header";
// import Products from "../src/Pages/Products"
import ListNote from "./Pages/ListNote";


const App = () => {
  return (
    <>
      {/* <Rutas /> */}
      <Header />
      <ListNote />
      {/* <Products /> */}
    </>
  );
};

export default App;
