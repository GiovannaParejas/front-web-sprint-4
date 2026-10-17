import { useEffect } from "react";

// Atualiza o título da aba do navegador conforme a página
const PageTitle = ({ titulo }) => {
  useEffect(() => {
    document.title = titulo ? `${titulo} | JOVI Study Lens` : "JOVI Study Lens";
  }, [titulo]);

  return null;
};

export default PageTitle;