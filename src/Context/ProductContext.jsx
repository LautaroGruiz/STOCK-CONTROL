import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductContext = ({ children }) => {
  const [products, setProductos] = useState();

  const getProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);
      const updatedProducts = products.filter(
        (producto) => producto.id !== id
      );
      setProductos(updatedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const putProducto = async (producto) => {
    try {
      await axios.put(
        `http://localhost:8080/products/${producto.id}`,
        producto
      );
      await getProductos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <ProductosContext.Provider
      value={{ products, deleteProduct, putProducto, getProductos }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductContext;
