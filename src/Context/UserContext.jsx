import { createContext, useState, useEffect } from "react";
import axios from "axios";
// import Swal from "sweetalert2";

export const UsuariosContext = createContext(); //Creacion de contexto

// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const logOut = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/";
  };

  return (
    <UsuariosContext.Provider value={{ users, setUsers, logOut }}>
      {children}
    </UsuariosContext.Provider>
  );
};
export default UserContext;
