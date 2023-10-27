import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/App.css";
import UserContext from "./Context/UserContext";
import ProductContext from "./Context/ProductContext";
import Rutas from "./Routes/Rutas";

const App = () => {
  return (
    <>
      <UserContext>
        <ProductContext>
          <Rutas />
        </ProductContext>
      </UserContext>
    </>
  );
};

export default App;
// json-server --watch db.jason
