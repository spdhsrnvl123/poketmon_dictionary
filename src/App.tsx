import React from "react";
import styled from "styled-components";
import SearchContainer from "./components/SearchContainer";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Router from "./router/router";
import Header from "./layouts/Header";
import AddButton from "./components/AddButton";
import Category from "./layouts/Category";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SearchContainer />
      <Category />
      <Router />

      <AddButton />
    </>
  );
}

export default App;
