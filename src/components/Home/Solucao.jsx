import useFetch from "../../hooks/useFetch";
import SectionHeader from "../SectionHeader";
import StatusFetch from "../StatusFetch";
import FeatureCard from "./FeatureCard";

const Solucao = () => {
  const {
    dados: recursos,
    carregando,
    erro,
    recarregar,
  } = useFetch("recursos");

  return (
    <section
      id="solucao"
      className="px-6 pt-10 pb-5 sm:px-[60px] sm:pt-[60px] sm:pb-[30px] lg:px-[120px] lg:pt-20"
    >
      <SectionHeader
        titulo="Transforme imagens em conhecimento"
        subtitulo="Tudo que o estudante precisa, dentro da câmera"
      />

      <StatusFetch carregando={carregando} erro={erro} recarregar={recarregar}>
        <div className="grid grid-cols-1 gap-[1.2rem] lg:grid-cols-3">
          {recursos?.map((recurso) => (
            <FeatureCard key={recurso.id} {...recurso} />
          ))}
        </div>
      </StatusFetch>
    </section>
  );
};

export default Solucao;
