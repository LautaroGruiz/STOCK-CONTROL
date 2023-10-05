import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
// import Products from "../Pages/Products";
// import Header from "../Components/Header";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
