import { useState } from "react";
import useFetch from "./useFetch";

// Busca as capturas do estudante e aplica filtro por disciplina e busca por texto
export default function useCapturas() {
  const { dados, carregando, erro, recarregar } = useFetch("capturas");
  const [disciplina, setDisciplina] = useState("Todas");
  const [busca, setBusca] = useState("");

  const lista = dados ?? [];

  // Disciplinas que aparecem nas capturas, sem repetir
  const disciplinas = ["Todas"];
  lista.forEach((c) => {
    if (!disciplinas.includes(c.disciplina)) disciplinas.push(c.disciplina);
  });

  const termo = busca.trim().toLowerCase();
  const capturas = lista.filter((c) => {
    const mesmaDisciplina =
      disciplina === "Todas" || c.disciplina === disciplina;
    const encontrouTexto = `${c.titulo} ${c.resumo}`
      .toLowerCase()
      .includes(termo);
    return mesmaDisciplina && encontrouTexto;
  });

  return {
    capturas,
    total: lista.length,
    disciplinas,
    disciplina,
    setDisciplina,
    busca,
    setBusca,
    carregando,
    erro,
    recarregar,
  };
}
