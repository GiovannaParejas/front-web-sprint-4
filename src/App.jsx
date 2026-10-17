import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RotaPrivada from "./routes/RotaPrivada";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AreaEstudante from "./pages/AreaEstudante";
import NotFound from "./pages/NotFound";

const App = () => {
  // O usuário logado fica aqui e é passado por props para quem precisa
  const { usuario, carregando, login, logout } = useAuth();

  return (
    <Router>
      <Header usuario={usuario} logout={logout} />
      <main className="pt-[87px] sm:pt-[115px] lg:pt-[95px]">
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login usuario={usuario} login={login} carregando={carregando} />
            }
          />

          {/* Rota privada: só acessível com login */}
          <Route
            path="/area-do-estudante"
            element={
              <RotaPrivada usuario={usuario}>
                <AreaEstudante usuario={usuario} />
              </RotaPrivada>
            }
          />

          {/* Qualquer outro endereço */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
