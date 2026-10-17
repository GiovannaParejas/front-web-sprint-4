// Acesso à API mockada: os dados ficam em arquivos JSON na pasta public/api
export async function buscar(recurso) {
  const resposta = await fetch(`/api/${recurso}.json`);

  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status} ao buscar "${recurso}"`);
  }

  return resposta.json();
}

export async function autenticar(email, senha) {
  const usuarios = await buscar("usuarios");
  const usuario = usuarios.find(
    (u) =>
      u.email.toLowerCase() === email.trim().toLowerCase() && u.senha === senha,
  );

  if (!usuario) {
    throw new Error("E-mail ou senha inválidos.");
  }

  // Devolve os dados do usuário sem a senha
  return { id: usuario.id, nome: usuario.nome, email: usuario.email };
}
