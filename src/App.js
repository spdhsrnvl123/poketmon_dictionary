import React from 'react'
import styled from 'styled-components';
import SearchContainer from './components/SearchContainer';

const Title = styled.h1`
  display: block;
  height: 37px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  z-index: 2; //footer 문제로 z-index 추가.

  .inner_footer {
    display: flex;
    justify-content: space-between;
    width: 916px;
    margin: 0 auto;
    padding-top: 22px;
    small {
      font-size: 12px;
      line-height: 21px;
      color: #999;
    }
    .area_link {
      span {
        margin-left: 10px;
        font-size: 14px;
        color: #999;
      }
    }
  }
`;

function App() {
  
  return (
    <>
      <Title>Developer Notice</Title>
      <SearchContainer />
      <Footer>
        <div className="inner_footer">
          <small>&copy; 2024 Developer Notice</small>
          <div className="area_link">
            <span>인스타그램</span>
            <span>유튜브</span>
          </div>
        </div>
      </Footer>
    </>
  );
}

export default App