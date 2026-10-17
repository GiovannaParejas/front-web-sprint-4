const SectionHeader = ({
  id,
  titulo,
  subtitulo,
  alinhamento = "center",
  className = "",
}) => {
  const alinhar =
    alinhamento === "left-desktop" ? "text-center lg:text-left" : "text-center";

  return (
    <div className={`mb-[30px] flex flex-col gap-2 sm:mb-[35px] lg:mb-[45px] ${alinhar} ${className}`}>
      <h2 id={id} className="text-[1.4rem] font-bold sm:text-[1.8rem] lg:text-[2rem]">
        {titulo}
      </h2>
      {subtitulo && (
        <p className="text-base font-medium text-jovi-escuro/85 sm:text-[1.2rem]">
          {subtitulo}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;