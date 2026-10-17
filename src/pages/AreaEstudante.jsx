import PageTitle from "../components/PageTitle";

const AreaEstudante = ({ usuario }) => {
  return (
    <section className="px-6 py-10 sm:px-[60px] lg:px-[120px]">
      <PageTitle titulo="Área do Estudante" />
      <h1 className="text-[1.6rem] font-bold sm:text-[2rem]">
        Olá, {usuario.nome}!
      </h1>
      <p className="mt-2">Esta página só aparece para quem fez login.</p>
    </section>
  );
};

export default AreaEstudante;
