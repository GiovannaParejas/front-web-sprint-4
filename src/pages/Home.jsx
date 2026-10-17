import useScrollToHash from "../hooks/useScrollToHash";
import PageTitle from "../components/PageTitle";
import Hero from "../components/Home/Hero";
import PublicoAlvo from "../components/home/PublicoAlvo";
import Cta from "../components/home/Cta";

const Home = () => {
  useScrollToHash();

  return (
    <>
      <PageTitle titulo="Início" />
      <Hero titulo="JOVI Study Lens" subtitulo="A câmera que estuda com você" />
      <PublicoAlvo />
      <Cta
        titulo="Pronto para transformar a forma como você estuda?"
        subtitulo="Experimente o JOVI Study Lens e veja o que a sua câmera é capaz de fazer."
        rotulo="Ver protótipo"
        destino="/#galeria"
      />
    </>
  );
};

export default Home;
