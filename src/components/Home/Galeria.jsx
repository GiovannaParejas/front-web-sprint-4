import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import useFetch from "../../hooks/useFetch";
import SectionHeader from "../SectionHeader";
import StatusFetch from "../StatusFetch";

const BREAKPOINTS = {
  576: { slidesPerView: 3, spaceBetween: 20 },
  992: { slidesPerView: 4, spaceBetween: 24 },
};

const Galeria = () => {
  const { dados: telas, carregando, erro, recarregar } = useFetch("galeria");

  return (
    <section
      id="galeria"
      className="px-6 py-5 sm:px-[60px] sm:py-[30px] lg:px-[120px] lg:pt-5 lg:pb-10"
    >
      <SectionHeader
        titulo="Veja o JOVI Study Lens em ação"
        className="!mb-5 sm:!mb-[25px] lg:!mb-[45px]"
      />

      <StatusFetch carregando={carregando} erro={erro} recarregar={recarregar}>
        <Swiper
          className="galeria-swiper !pb-10 sm:!pb-[35px] lg:!pb-[45px]"
          modules={[Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={16}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={BREAKPOINTS}
        >
          {telas?.map((tela) => (
            <SwiperSlide
              key={tela.id}
              className="!h-auto overflow-hidden rounded-xl"
            >
              <img
                src={tela.imagem}
                alt={tela.alt}
                className="block h-full w-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </StatusFetch>
    </section>
  );
};

export default Galeria;
