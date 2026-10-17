import { Link } from "react-router-dom";

const BASE =
  "inline-block rounded-lg border-2 font-medium transition duration-300 ease-in-out text-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTES = {
  // Botão branco com texto escuro
  claro:
    "bg-white text-jovi-escuro border-white lg:hover:bg-transparent lg:hover:text-white",
  // Botão transparente com borda branca
  contorno:
    "bg-transparent text-white border-white lg:hover:bg-white lg:hover:text-jovi-escuro",
  // Botão azul da marca
  azul: "bg-jovi text-white border-jovi lg:hover:bg-white lg:hover:text-jovi",
};

const TAMANHOS = {
  md: "px-[18px] py-3 text-base sm:px-5 sm:py-3.5 sm:text-[1.1rem] lg:py-4 lg:text-[1.2rem]",
  sm: "px-5 py-2.5 text-[0.9rem] sm:text-[0.8rem] lg:text-base",
  form: "w-full py-3 text-[0.9rem] sm:py-4 sm:text-[1.15rem] lg:py-3 lg:text-[0.9rem]",
};

const Button = ({
  to,
  href,
  variante = "claro",
  tamanho = "md",
  className = "",
  children,
  ...props
}) => {
  const classes = `${BASE} ${VARIANTES[variante]} ${TAMANHOS[tamanho]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
