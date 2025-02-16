import React from "react";
import styled from "styled-components";
import SearchContainer from "./components/SearchContainer";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Router from "./router/router";
import Header from "./layouts/Header";
import AddButton from "./components/AddButton";
import UpButton from "./components/UpButton";
import Category from "./layouts/Category";

const Footer = styled.footer`
  min-width: 100%;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  z-index: 2; //footer 문제로 z-index 추가.
  padding-top:10px;
  padding-bottom: 10px;

  .inner_footer {
    display: flex;
    justify-content: space-between;
    margin: 0 5px;
    small {
      font-size: 12px;
      line-height: 21px;
      color: #999;
    }
    .area_link {
      span {
        padding-left: 10px;
        font-size: 14px;
        color: #999;
      }
    }
  }
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <SearchContainer />
      <Category />
      <Router />
      <AddButton />
      {/* <Footer>
        <div className="inner_footer">
          <small>&copy; poketmon dictionary</small>
          <div className="area_link">
            <span>beverage</span>
            <span>goods</span>
            <span>store</span>
          </div>
        </div>
      </Footer> */}
    </>
  );
}

export default App;
