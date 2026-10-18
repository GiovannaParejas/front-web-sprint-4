import useLocalStorage from "./useLocalStorage";

// Anotações pessoais do estudante, salvas no navegador por usuário
export default function useAnotacoes(usuarioId) {
  const [anotacoes, setAnotacoes] = useLocalStorage(
    `jovi:anotacoes:${usuarioId}`,
    [],
  );

  const adicionar = (texto) => {
    const limpo = texto.trim();
    if (!limpo) return;
    setAnotacoes((lista) => [{ id: Date.now(), texto: limpo }, ...lista]);
  };

  const remover = (id) =>
    setAnotacoes((lista) => lista.filter((a) => a.id !== id));

  return { anotacoes, adicionar, remover };
}
