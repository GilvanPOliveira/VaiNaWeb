import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayouts from "../layouts/DefaultLayouts";
import Home from "../pages/Home/Home";
import Doacao from "../pages/Doacao/Doacao";
import LivrosDoados from "../pages/LivrosDoados/LivrosDoados";

const App = () => {
  return (
    <Router>
      <DefaultLayouts>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doacao" element={<Doacao />} />
          <Route path="/livros-doados" element={<LivrosDoados />} />
        </Routes>
      </DefaultLayouts>
    </Router>
  );
};

export default App;
