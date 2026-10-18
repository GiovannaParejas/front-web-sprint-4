import useFetch from "../../hooks/useFetch";
import SectionHeader from "../SectionHeader";
import StatusFetch from "../StatusFetch";
import MemberCard from "./MemberCard";

const Equipe = () => {
  const { dados: membros, carregando, erro, recarregar } = useFetch("equipe");

  return (
    <section
      id="nossa-equipe"
      className="px-6 py-5 sm:px-[60px] sm:py-[30px] lg:px-[120px] lg:py-10"
    >
      <SectionHeader
        titulo="Consultoria UNO"
        subtitulo="O time por trás do JOVI Study Lens"
      />

      <StatusFetch carregando={carregando} erro={erro} recarregar={recarregar}>
        <ul className="grid list-none grid-cols-1 gap-[1.2rem] sm:grid-cols-2 lg:grid-cols-4">
          {membros?.map((membro) => (
            <MemberCard key={membro.id} {...membro} />
          ))}
        </ul>
      </StatusFetch>
    </section>
  );
};

export default Equipe;
