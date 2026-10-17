import { Navigate } from "react-router-dom";

// Se o usuário estiver logado, mostra a página; senão, manda para o login
const RotaPrivada = ({ usuario, children }) => {
  if (!usuario) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RotaPrivada;
