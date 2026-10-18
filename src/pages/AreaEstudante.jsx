import useCapturas from "../hooks/useCapturas";
import PageTitle from "../components/PageTitle";
import StatusFetch from "../components/StatusFetch";
import CapturaCard from "../components/area/CapturaCard";
import Anotacoes from "../components/area/Anotacoes";

const AreaEstudante = ({ usuario }) => {
  const {
    capturas,
    total,
    disciplinas,
    disciplina,
    setDisciplina,
    busca,
    setBusca,
    carregando,
    erro,
    recarregar,
  } = useCapturas();

  return (
    <>
      <PageTitle titulo="Área do Estudante" />

      <section className="bg-linear-[106deg] from-jovi-noite to-jovi px-6 py-10 text-white sm:px-[60px] lg:px-[120px] lg:py-14">
        <h1 className="text-[1.6rem] font-bold sm:text-[2rem] lg:text-[2.4rem]">
          Olá, {usuario.nome}!
        </h1>
        <p className="mt-2 text-white/90 sm:text-[1.1rem]">
          Você tem {total} capturas organizadas pelo JOVI Study Lens.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-8 px-6 py-10 sm:px-[60px] lg:grid-cols-[1fr_320px] lg:px-[120px]">
        <div>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[1.4rem] font-bold sm:text-[1.8rem]">
              Minhas capturas
            </h2>
            <label className="sm:w-64">
              <span className="sr-only">Buscar capturas</span>
              <input
                type="search"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar por título ou conteúdo"
                className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-[0.95rem] outline-none focus:border-jovi focus:ring-[3px] focus:ring-[#3d5afe]/15"
              />
            </label>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {disciplinas.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDisciplina(d)}
                className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  disciplina === d
                    ? "border-jovi bg-jovi text-white"
                    : "border-jovi/30 bg-white text-jovi hover:bg-jovi/10"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <StatusFetch
            carregando={carregando}
            erro={erro}
            recarregar={recarregar}
          >
            {capturas.length === 0 ? (
              <p className="py-10 text-center text-jovi-escuro/70">
                Nenhuma captura encontrada.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-[1.2rem] sm:grid-cols-2">
                {capturas.map((captura) => (
                  <CapturaCard key={captura.id} {...captura} />
                ))}
              </div>
            )}
          </StatusFetch>
        </div>

        <Anotacoes usuarioId={usuario.id} />
      </section>
    </>
  );
};

export default AreaEstudante;
