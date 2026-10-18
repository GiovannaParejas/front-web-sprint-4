import { useState } from "react";
import useAnotacoes from "../../hooks/useAnotacoes";
import Button from "../Button";
import Card from "../Card";

const Anotacoes = ({ usuarioId }) => {
  const { anotacoes, adicionar, remover } = useAnotacoes(usuarioId);
  const [texto, setTexto] = useState("");

  const salvar = (evento) => {
    evento.preventDefault();
    adicionar(texto);
    setTexto("");
  };

  return (
    <Card className="p-5 hover:translate-y-0 sm:p-6">
      <h2 className="mb-1 text-[1.2rem] font-bold">Minhas anotações</h2>
      <p className="mb-4 text-sm text-jovi-escuro/70">
        Salvas neste navegador.
      </p>

      <form onSubmit={salvar} className="mb-4 flex flex-col gap-3">
        <label htmlFor="nova-anotacao" className="sr-only">
          Nova anotação
        </label>
        <textarea
          id="nova-anotacao"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ex.: revisar estequiometria antes da prova"
          className="min-h-20 rounded-lg border border-black/15 bg-white px-4 py-3 text-[0.95rem] outline-none focus:border-jovi focus:ring-[3px] focus:ring-[#3d5afe]/15"
        />
        <Button
          type="submit"
          variante="azul"
          tamanho="form"
          className="!border"
          disabled={!texto.trim()}
        >
          Adicionar
        </Button>
      </form>

      {anotacoes.length === 0 ? (
        <p className="text-sm text-jovi-escuro/60">Nenhuma anotação ainda.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {anotacoes.map((a) => (
            <li
              key={a.id}
              className="flex items-start justify-between gap-3 rounded-lg bg-jovi-fundo px-3 py-2 text-sm"
            >
              <span className="break-words">{a.texto}</span>
              <button
                type="button"
                onClick={() => remover(a.id)}
                title="Remover anotação"
                className="cursor-pointer font-bold text-jovi-escuro/50 hover:text-red-600"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Anotacoes;
