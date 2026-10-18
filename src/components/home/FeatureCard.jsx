import Card from "../Card";

const FeatureCard = ({ icone, alt, titulo, destaque, descricao }) => {
  return (
    <Card className="px-5 py-[30px]">
      <img
        src={icone}
        alt={alt}
        className="mb-2.5 block size-[45px] rounded-lg object-contain lg:mb-3.5"
      />
      <h3 className="mb-2 text-[1.1rem] font-bold">{titulo}</h3>
      <p className="text-[0.9rem]">
        {destaque && <span className="font-bold text-jovi">{destaque} </span>}
        {descricao}
      </p>
    </Card>
  );
};

export default FeatureCard;
