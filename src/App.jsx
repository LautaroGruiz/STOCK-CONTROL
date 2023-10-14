import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/App.css";
import UserContext from "./Context/UserContext";
import Rutas from "./Routes/Rutas";

const App = () => {
  return (
    <>
      <UserContext>
        <Rutas />
      </UserContext>
    </>
  );
};

export default App;
// json-server --watch db.jason
