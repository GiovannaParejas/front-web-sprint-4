# JOVI Study Lens - Sprint 4 (React + Tailwind)

Evolução da landing page da Sprint 03, desenvolvida pela **Consultoria UNO**, agora como uma aplicação **React** estilizada com **Tailwind CSS**, com rotas públicas e privadas, hooks customizados e consumo de uma API mockada.

🌐 **Deploy na Vercel:** https://front-web-sprint-4-kappa.vercel.app/

## 🛠️ Tecnologias utilizadas

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) - rotas públicas e privadas
- [Tailwind CSS 4](https://tailwindcss.com/) - estilização e responsividade (mobile, tablet e desktop)
- [Swiper](https://swiperjs.com/react) - carrossel da galeria
- API mockada em JSON (`public/api`), consumida via `fetch`
- ESLint
- Git + Vercel (deploy)

## 📁 Estrutura

```
├── public/
│   ├── api/            # API mockada (JSON)
│   └── images/         # imagens e ícones
├── src/
│   ├── components/     # componentes reutilizáveis
│   │   ├── area/       # componentes da Área do Estudante
│   │   ├── home/       # seções da landing page
│   │   └── layout/     # Header, Footer
│   │    
│   ├── hooks/          # hooks customizados
│   ├── pages/          # Home, Login, AreaEstudante, NotFound
│   ├── routes/         # RotaPrivada
│   ├── services/       # acesso à API
│   ├── App.jsx         # definição das rotas
│   └── main.jsx
├── vercel.json         # rewrite para SPA na Vercel
└── INTEGRANTES.TXT
```

## ▶️ Como executar

Pré-requisito: **Node.js 20.19+** (ou 22+) e npm.

```bash
# 1. Clonar o repositório
git clone https://github.com/GiovannaParejas/front-web-sprint-4.git
cd front-web-sprint-4

# 2. Instalar as dependências
npm install

# 3. Executar em modo de desenvolvimento
npm run dev
# acesse http://localhost:5173
```

Outros comandos:

```bash
npm install tailwindcss @tailwindcss/vite    # baixa o tailwind
npm install react-router-dom                 # baixa o react-router-dom
npm install swiper                           # baixa o swiper
```

### Back-end / API

Não há servidor back-end para executar. A API é **mockada**: os dados ficam em arquivos JSON na pasta `public/api/` e são servidos pelo próprio Vite (local) ou pela Vercel (produção), sendo consumidos com `fetch` em `src/services/api.js`.

## 🔐 Usuários para teste

A **Área do Estudante** (rota privada) exige login:

| E-mail | Senha |
|---|---|
| `estudante@jovi.com` | `jovi123` |
| `professor@fiap.com.br` | `fiap123` |

Na área logada é possível filtrar as capturas por disciplina, buscar por texto e criar/remover anotações (salvas no `localStorage` do navegador). A sessão também fica salva no `localStorage`; use o botão **Sair** no menu para encerrá-la.

> Observação: por se tratar de uma API mockada para fins acadêmicos, as credenciais ficam em `public/api/usuarios.json`. Em produção, a autenticação deveria ser feita por um back-end real.


## 🤖 Uso de Inteligência Artificial

- Ajuda na estilização do README.
- Criação de dados para os arquivos json.
- Ajuda na lógica das rotas privadas que não foram exploradas a fundo em aula.


## 👥 Equipe - Consultoria UNO

| Nome | RM |
|---|---|
| Bruce Li Yan Ting | 569168 |
| Felipe Rorato Costa | 570419 |
| Giovanna Andrade Parejas | 569041 |
| Laura Cardin Mirilli | 570841 |