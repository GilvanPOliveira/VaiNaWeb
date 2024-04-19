import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Projetos from "./pages/Projetos/Projetos";
import { GlobalStyle } from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
