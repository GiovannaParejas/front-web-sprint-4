const LINKS_UTEIS = [
  { rotulo: "Início", href: "/#hero" },
  { rotulo: "Solução", href: "/#solucao" },
  { rotulo: "Galeria", href: "/#galeria" },
  { rotulo: "Nossa Equipe", href: "/#nossa-equipe" },
  { rotulo: "Fale conosco", href: "/#contato" },
];

const INTEGRANTES = ["Bruce Li", "Felipe Rorato", "Giovanna Parejas", "Laura Mirilli"];
const EMAIL = "consultoriauno1espi@gmail.com";

const Coluna = ({ titulo, children }) => {
  return (
    <div>
      <h3 className="text-[1.05rem] font-bold">{titulo}</h3>
      <ul className="mt-2 mb-[30px] flex list-none flex-col gap-2 sm:mt-3 lg:mt-2 lg:mb-10">
        {children}
      </ul>
    </div>
  );
};

const LINK = "text-base text-jovi-escuro no-underline transition duration-300 2xl:hover:text-jovi";

const Footer = () => {
  return (
    <footer className="px-6 py-10 sm:px-[60px] sm:pt-[60px] sm:pb-[30px] lg:px-[100px] lg:pt-[60px] lg:pb-[25px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-[50px] 2xl:gap-0">
        <div className="mb-[35px] text-center sm:mb-10 lg:mb-[35px]">
          <a href="/#hero" className="inline-block">
            <img src="/images/logo-footer.svg" alt="Logo Jovi" className="mx-auto" />
          </a>
          <p className="mt-2.5 text-base sm:text-[1.1rem] lg:text-base">
            Transforme imagens em conhecimento
          </p>
        </div>

        <Coluna titulo="Links Úteis">
          {LINKS_UTEIS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={LINK}>
                {link.rotulo}
              </a>
            </li>
          ))}
        </Coluna>

        <Coluna titulo="Integrantes">
          {INTEGRANTES.map((nome) => (
            <li key={nome}>{nome}</li>
          ))}
        </Coluna>

        <Coluna titulo="Contato">
          <li>
            <a href={`mailto:${EMAIL}`} className={`${LINK} flex items-center gap-2 break-all underline`}>
              <img src="/images/email-icon.svg" alt="" className="size-[19px] object-contain" />
              {EMAIL}
            </a>
          </li>
        </Coluna>
      </div>

      <p className="py-2 text-center text-[0.8rem] text-black/50">
        © 2026 JOVI Study Lens | Consultoria UNO | Sprint 4
      </p>
    </footer>
  );
};

export default Footer;