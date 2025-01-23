import React from "react";
import styled from "styled-components";
import SearchContainer from "./components/SearchContainer";
import CardBoxPage from "./pages/CardBoxPage";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { useSelector } from "react-redux";

const Title = styled.h1`
  font-size: 30px;
  color : #4876EF;
  height: 37px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 2px;
  font-family: "Noto Sans", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  width: 100%;
`;

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
      <Title>Pokemon dictionary</Title>
      <SearchContainer />
      <CardBoxPage />
      <Footer>
        <div className="inner_footer">
          <small>&copy; poketmon dictionary</small>
          <div className="area_link">
            <span>beverage</span>
            <span>goods</span>
            <span>store</span>
          </div>
        </div>
      </Footer>
    </>
  );
}

export default App;
