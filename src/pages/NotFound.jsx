import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <section className="flex min-h-[70dvh] flex-col items-center justify-center gap-4 px-6 text-center">
      <PageTitle titulo="Página não encontrada" />
      <p className="text-[4rem] font-bold text-jovi">404</p>
      <h1 className="text-[1.4rem] font-bold sm:text-[1.8rem]">Página não encontrada</h1>
      <p className="text-jovi-escuro/80">O endereço acessado não existe.</p>
      <Button to="/" variante="azul" tamanho="sm" className="!border">
        Voltar ao início
      </Button>
    </section>
  );
};

export default NotFound;