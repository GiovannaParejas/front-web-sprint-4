import useContactForm from "../../hooks/useContactForm";
import Button from "../Button";
import FormField from "../FormField";
import SectionHeader from "../SectionHeader";

const Contato = () => {
  const { valores, erros, status, alterar, enviar } = useContactForm();

  return (
    <section
      id="contato"
      className="px-6 py-10 sm:px-[60px] sm:pt-[30px] sm:pb-[60px] lg:px-[120px] lg:pt-10 lg:pb-12"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-20 2xl:mx-auto 2xl:max-w-[1200px]">
        <div>
          <SectionHeader
            titulo="Fale com a equipe"
            subtitulo="Dúvidas ou sugestões? Envie uma mensagem"
            alinhamento="left-desktop"
            className="!mb-[30px]"
          />

          <form onSubmit={enviar} noValidate className="flex flex-col gap-4">
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[1.6rem]">
              <FormField
                label="Nome"
                id="nome"
                placeholder="Insira o seu nome"
                value={valores.nome}
                onChange={alterar}
                erro={erros.nome}
              />
              <FormField
                label="E-mail"
                id="email"
                type="email"
                placeholder="exemplo@email.com"
                value={valores.email}
                onChange={alterar}
                erro={erros.email}
              />
              <FormField
                label="Mensagem"
                id="mensagem"
                multiline
                placeholder="Digite a sua mensagem"
                value={valores.mensagem}
                onChange={alterar}
                erro={erros.mensagem}
              />
            </div>

            <Button
              type="submit"
              variante="azul"
              tamanho="form"
              className="mt-4 !border"
            >
              Enviar Mensagem
            </Button>
            <p className="text-center text-sm text-jovi">{status}</p>
          </form>
        </div>

        <img
          src="/images/contato-img.png"
          alt="Pessoa ao telefone, sentada perto de uma janela, com um laptop sobre a mesa ao fundo."
          className="aspect-square w-full rounded-lg object-cover lg:ml-auto lg:max-w-[500px]"
        />
      </div>
    </section>
  );
};

export default Contato;
