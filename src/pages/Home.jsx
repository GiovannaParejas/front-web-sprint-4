import useScrollToHash from "../hooks/useScrollToHash";
import PageTitle from "../components/PageTitle";
import Hero from "../components/Home/Hero";

const Home = () => {
  useScrollToHash();

  return (
    <>
      <PageTitle titulo="Início" />
      <Hero titulo="JOVI Study Lens" subtitulo="A câmera que estuda com você" />
    </>
  );
};

export default Home;