import Card from "../Card";

const formatarData = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });

const CapturaCard = ({ titulo, disciplina, tipo, data, resumo }) => {
  return (
    <Card className="flex flex-col gap-3 p-5">
      <div className="flex items-center justify-between gap-2 text-xs font-semibold">
        <span className="rounded-full bg-jovi/10 px-3 py-1 text-jovi">
          {disciplina}
        </span>
        <span className="text-jovi-escuro/60">
          {tipo} · {formatarData(data)}
        </span>
      </div>
      <h3 className="text-[1.1rem] font-bold">{titulo}</h3>
      <p className="text-[0.9rem] text-jovi-escuro/85">{resumo}</p>
    </Card>
  );
};

export default CapturaCard;
