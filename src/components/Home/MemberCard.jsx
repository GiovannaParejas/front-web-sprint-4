import Card from "../Card";

const MemberCard = ({ nome, funcao, icone }) => {
  return (
    <li>
      <Card className="h-full px-[30px] py-10 text-center">
        <img
          src={icone}
          alt={`Ícone de ${nome}`}
          className="mx-auto mb-2.5 block size-[50px] rounded-lg object-contain sm:mb-3 lg:mb-4"
        />
        <h3 className="mb-2 text-[1.2rem] font-bold">{nome}</h3>
        <p className="text-base">{funcao}</p>
      </Card>
    </li>
  );
};

export default MemberCard;
