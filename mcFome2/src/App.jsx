import React from "react";
import * as S from "./components/styled";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <Main />
      <Section />
      <Footer />
    </>
  );
}

export default App;
