import { useState } from "react";

// Controla a abertura do menu hambúrguer
export default function useMenu() {
  const [aberto, setAberto] = useState(false);

  const alternar = () => {
    setAberto(!aberto);
  };

  // Usado ao clicar em um link, para o menu fechar depois de navegar
  const fechar = () => {
    setAberto(false);
  };

  return { aberto, alternar, fechar };
}