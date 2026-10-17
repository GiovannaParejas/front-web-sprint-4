import useScrollToHash from "../hooks/useScrollToHash";
import PageTitle from "../components/PageTitle";
import Hero from "../components/home/Hero";
import PublicoAlvo from "../components/home/PublicoAlvo";

const Home = () => {
  useScrollToHash();

  return (
    <>
      <PageTitle titulo="Início" />
      <Hero titulo="JOVI Study Lens" subtitulo="A câmera que estuda com você" />
      <PublicoAlvo />
    </>
  );
};

export default Home;