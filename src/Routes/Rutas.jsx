import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../Pages/Products";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
