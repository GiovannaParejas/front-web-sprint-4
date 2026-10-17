import { useState, useEffect } from "react";
import { buscar } from "../services/api";

// Busca um recurso da API e expõe os estados de carregamento e erro
export default function useFetch(recurso) {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    buscar(recurso)
      .then((resposta) => {
        setDados(resposta);
        setErro(null);
      })
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, [recurso, tentativa]);

  // Tenta buscar de novo (usado no botão "Tentar novamente")
  const recarregar = () => {
    setCarregando(true);
    setTentativa(tentativa + 1);
  };

  return { dados, carregando, erro, recarregar };
}
