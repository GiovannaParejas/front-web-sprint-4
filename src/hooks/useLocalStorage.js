import { useEffect, useState } from "react";

// useState sincronizado com o localStorage
export default function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = localStorage.getItem(chave);
      return salvo !== null ? JSON.parse(salvo) : valorInicial;
    } catch {
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      if (valor === null || valor === undefined) {
        localStorage.removeItem(chave);
      } else {
        localStorage.setItem(chave, JSON.stringify(valor));
      }
    } catch {
      // localStorage indisponível (ex.: navegação privada): mantém só em memória
    }
  }, [chave, valor]);

  return [valor, setValor];
}
