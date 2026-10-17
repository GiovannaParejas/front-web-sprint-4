import { useEffect } from "react";

// Quando a página abre com uma seção na URL, rola até ela depois que o conteúdo da API aparece
export default function useScrollToHash() {
  useEffect(() => {
    if (!window.location.hash) return;

    const timer = setTimeout(() => {
      const elemento = document.getElementById(window.location.hash.slice(1));
      if (elemento) elemento.scrollIntoView();
    }, 500);

    return () => clearTimeout(timer);
  }, []);
}