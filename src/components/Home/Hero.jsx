import React from 'react'
import Button from '../Button'

const Hero = ({ titulo, subtitulo }) => {
  return (
    <section
      id="hero"
      className="flex h-[90dvh] items-center justify-center bg-[url(/images/hero-mobile.png)] bg-cover bg-center px-6 text-center sm:bg-[url(/images/hero-tablet.png)] sm:px-[60px] lg:bg-[url(/images/hero-desktop.png)] lg:px-20"
    >
      <div>
        <h1 className="mb-2.5 text-[2.5rem] font-bold text-jovi-fundo sm:mb-2 sm:text-[4rem] lg:text-[5rem]">
          {titulo}
        </h1>
        <h2 className="mb-[26px] text-base font-medium text-white/90 sm:mb-9 sm:text-[1.4rem]">
          {subtitulo}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/#solucao">Conheça a solução</Button>
          <Button href="/#galeria" variante="contorno">
            Ver protótipo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;