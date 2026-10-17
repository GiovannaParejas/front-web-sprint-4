// Exibe carregamento ou erro de uma requisição; renderiza os filhos quando há dados
const StatusFetch = ({ carregando, erro, recarregar, children }) => {
  if (carregando) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-jovi-escuro/70">
        <span className="size-8 animate-spin rounded-full border-4 border-jovi/20 border-t-jovi" />
        Carregando...
      </div>
    );
  }

  if (erro) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <p>Não foi possível carregar o conteúdo. ({erro})</p>
        {recarregar && (
          <button
            onClick={recarregar}
            className="cursor-pointer rounded-lg bg-jovi px-4 py-2 text-white"
          >
            Tentar novamente
          </button>
        )}
      </div>
    );
  }

  return children;
};

export default StatusFetch;
