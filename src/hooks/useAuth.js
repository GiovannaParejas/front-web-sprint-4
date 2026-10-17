import { useState } from "react";
import { autenticar } from "../services/api";
import useLocalStorage from "./useLocalStorage";

// Guarda o usuário logado (também no localStorage, para continuar logado
// ao recarregar a página) e oferece as funções de login e logout
export default function useAuth() {
  const [usuario, setUsuario] = useLocalStorage("jovi:usuario", null);
  const [carregando, setCarregando] = useState(false);

  const login = async (email, senha) => {
    setCarregando(true);
    try {
      const dados = await autenticar(email, senha);
      setUsuario(dados);
    } finally {
      setCarregando(false);
    }
  };

  const logout = () => {
    setUsuario(null);
  };

  return { usuario, carregando, login, logout };
}
