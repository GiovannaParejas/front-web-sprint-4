import { useState } from "react";

const DESTINATARIO = "consultoriauno1espi@gmail.com";
const VALORES_INICIAIS = { nome: "", email: "", mensagem: "" };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar({ nome, email, mensagem }) {
  const erros = {};
  if (!nome.trim()) erros.nome = "Informe o seu nome.";
  if (!EMAIL_REGEX.test(email)) erros.email = "Informe um e-mail válido.";
  if (mensagem.trim().length < 10)
    erros.mensagem = "A mensagem deve ter ao menos 10 caracteres.";
  return erros;
}

// Lógica do formulário de contato: estado, validação e envio via mailto
export default function useContactForm() {
  const [valores, setValores] = useState(VALORES_INICIAIS);
  const [erros, setErros] = useState({});
  const [status, setStatus] = useState("");

  const alterar = (evento) => {
    const { name, value } = evento.target;
    setValores((v) => ({ ...v, [name]: value }));
    setErros((e) => ({ ...e, [name]: undefined }));
  };

  const enviar = (evento) => {
    evento.preventDefault();

    const novosErros = validar(valores);
    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) {
      setStatus("");
      return;
    }

    const { nome, email, mensagem } = valores;
    const assunto = `Contato pelo site — ${nome}`;
    const corpo = `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`;

    setStatus("Abrindo seu aplicativo de e-mail...");
    window.location.href = `mailto:${DESTINATARIO}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    setValores(VALORES_INICIAIS);
  };

  return { valores, erros, status, alterar, enviar };
}
