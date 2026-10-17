import { useState } from "react";
import { Navigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import Card from "../components/Card";
import FormField from "../components/FormField";

const Login = ({ usuario, login, carregando }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const entrar = async (evento) => {
    evento.preventDefault();
    setErro("");
    try {
      // Depois do login, o usuario muda e o if abaixo leva para a Área do Estudante
      await login(email, senha);
    } catch (e) {
      setErro(e.message);
    }
  };

  // Quem está logado vai direto para a Área do Estudante
  if (usuario) {
    return <Navigate to="/area-do-estudante" />;
  }

  return (
    <section className="flex min-h-[80dvh] items-center justify-center px-6 py-10 sm:px-[60px]">
      <PageTitle titulo="Entrar" />
      <Card className="w-full max-w-md p-6 hover:translate-y-0 sm:p-10">
        <h1 className="mb-2 text-center text-[1.6rem] font-bold sm:text-[2rem]">Área do Estudante</h1>
        <p className="mb-8 text-center text-jovi-escuro/80">
          Entre para acessar suas capturas e resumos.
        </p>

        <form onSubmit={entrar} className="flex flex-col gap-6">
          <FormField
            label="E-mail"
            id="login-email"
            type="email"
            autoComplete="username"
            placeholder="exemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormField
            label="Senha"
            id="login-senha"
            type="password"
            autoComplete="current-password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          {erro && (
            <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
              {erro}
            </p>
          )}

          <Button type="submit" variante="azul" tamanho="form" className="!border" disabled={carregando}>
            {carregando ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-jovi-escuro/70">
          Teste com <strong>estudante@jovi.com</strong> / <strong>jovi123</strong>
        </p>
      </Card>
    </section>
  );
};

export default Login;