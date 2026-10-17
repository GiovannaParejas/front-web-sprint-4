// Acesso à API mockada: os dados ficam em arquivos JSON na pasta public/api
export async function buscar(recurso) {
  const resposta = await fetch(`/api/${recurso}.json`);

  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status} ao buscar "${recurso}"`);
  }

  return resposta.json();
}
