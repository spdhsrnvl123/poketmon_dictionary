import React from "react";
import styled from "styled-components";
import SearchContainer from "./components/SearchContainer";
import CardBoxPage from "./pages/CardBoxPage";
import GlobalStyle from "./assets/styles/GlobalStyle";

const Title = styled.h1`
  font-size: 40px;
  color : #4876EF;
  height: 37px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 2px;
  font-family: "Noto Sans", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "wdth" 100;
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
      <Title>CodeHire</Title>
      <SearchContainer />
      <CardBoxPage />
      <Footer>
        <div className="inner_footer">
          <small>&copy; Developer Notice</small>
          <div className="area_link">
            <span>회사소개</span>
            <span>채용절차</span>
            <span>직무소개</span>
          </div>
        </div>
      </Footer>
    </>
  );
}

export default App;
