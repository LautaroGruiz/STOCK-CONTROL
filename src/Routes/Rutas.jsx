import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Products from "../Pages/Products";
import ListNote from "../Pages/ListNote";

const Rutas = () => {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));

  return (
    <>
      <BrowserRouter>
        <Routes>
          {usuarioLogueado !== null ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/inventario" element={<Products />} />
              <Route path="/list-note" element={<ListNote />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
