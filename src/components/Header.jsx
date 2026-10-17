import React from "react";
import useMenu from "../hooks/useMenu";

// Links para as seções da landing page
const LINKS = [
  { rotulo: "Início", href: "/#hero" },
  { rotulo: "Solução", href: "/#solucao" },
  { rotulo: "Público-alvo", href: "/#publico-alvo" },
  { rotulo: "Galeria", href: "/#galeria" },
  { rotulo: "Nossa Equipe", href: "/#nossa-equipe" },
  { rotulo: "Contato", href: "/#contato" },
];

const LINK_CLASSES =
  "block text-[0.9rem] font-medium text-jovi-fundo no-underline sm:text-[1.05rem] lg:text-[1.1rem] lg:hover:text-white/75";

// Linha que separa os links no menu do celular e tablet
const Divisor = () => {
  return <hr className="my-[18px] border-white/50 lg:hidden" />;
};

const Header = () => {
  const { aberto, alternar, fechar } = useMenu();

  return (
    <header className="fixed top-0 left-0 z-[1000] w-full bg-jovi px-10 py-[30px] sm:px-20 sm:py-10 lg:py-[30px]">
      <nav className="flex w-full items-center justify-between">
        <a href="/#hero" className="flex items-center">
          <img
            src="/images/logo-jovi.svg"
            alt="Logo da JOVI"
            className="block h-[27px] w-[100px] object-contain sm:h-[35px] sm:w-[145px] lg:w-[128px]"
          />
        </a>

        <button
          type="button"
          onClick={alternar}
          className="cursor-pointer lg:hidden"
        >
          <img
            src={aberto ? "/images/menu-fechar.svg" : "/images/menu-hamburguer.svg"}
            alt={aberto ? "Fechar menu" : "Abrir menu"}
            className={aberto ? "size-[25px] sm:size-[35px]" : "h-[23px] w-[31px] sm:h-8 sm:w-[45px]"}
          />
        </button>

        <ul
          id="lista-menu"
          className={`${aberto ? "block" : "hidden"} absolute top-full left-0 w-full list-none bg-jovi pr-10 pb-10 pl-[35px] sm:px-20 lg:static lg:flex lg:w-auto lg:items-center lg:gap-[25px] lg:p-0`}
        >
          {LINKS.map((link, i) => (
            <li key={link.href}>
              {i > 0 && <Divisor />}
              <a href={link.href} onClick={fechar} className={LINK_CLASSES}>
                {link.rotulo}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
