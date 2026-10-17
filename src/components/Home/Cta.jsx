import Button from "../Button";

const Cta = ({ titulo, subtitulo, rotulo, destino }) => {
  return (
    <section className="bg-linear-[106deg] from-jovi-noite to-jovi px-6 py-8 text-center text-white sm:py-[2.3rem] lg:py-[4.5rem]">
      <h2 className="mb-3 text-[1.4rem] font-bold sm:text-[1.5rem] lg:text-[2rem]">
        {titulo}
      </h2>
      <p className="mb-4 text-[0.9rem] text-white/90 lg:mb-[30px] lg:text-[1.2rem]">
        {subtitulo}
      </p>
      <Button href={destino} tamanho="sm" className="!border font-semibold">
        {rotulo}
      </Button>
    </section>
  );
};

export default Cta;
