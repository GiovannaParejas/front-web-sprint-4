const PublicoAlvo = () => {
  return (
    <section
      id="publico-alvo"
      className="px-6 py-10 sm:px-[60px] sm:py-[30px] lg:px-[120px] lg:pt-5 lg:pb-10"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <img
          src="/images/publico-alvo-img.jpg"
          alt="Estudante usando o celular para estudar"
          className="block aspect-[4/3] w-full rounded-xl object-cover"
        />

        <div className="space-y-3 text-base sm:space-y-3.5 sm:text-[1.1rem] lg:text-[1.2rem]">
          <h2 className="mb-3.5 text-[1.4rem] font-bold sm:mb-4 sm:text-[1.8rem] lg:text-[2rem]">
            Feito para quem estuda de verdade
          </h2>
          <p>
            Estudantes do ensino médio e superior que registram cada aula pelo
            celular, mas perdem o conteúdo na bagunça da galeria, com fotos
            ilegíveis, sem organização e sem aproveitar o conteúdo.
          </p>
          <p>
            O JOVI Study Lens é relevante porque resolve na captura o que hoje
            exige tempo, esforço e múltiplos apps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PublicoAlvo;
