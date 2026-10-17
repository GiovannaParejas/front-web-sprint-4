import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-[87px] sm:pt-[115px] lg:pt-[95px]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;