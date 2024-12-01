import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"

const SubTit = styled.nav`
    display: grid;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 223px;
    background-position: center;
    background-color: skyblue;
`

const WrapSearch = styled.div`
    margin: 8px 0 14px;
`

const BundleInp = styled.div`
    position: relative;
    width: 400px;
    margin: 0 auto;
    border-radius: 25px;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, .4);
`
const ResultText = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

const ResultNumber = styled.em`
  color: #ffdd00;
  font-size: 26px;
  /* background-color: black; */
`;
const SearchContainer = ()=>{
  const data = useSelector((state)=>state);

  return (
    <SubTit>
      <WrapSearch>
        <BundleInp>
          {/* <Input /> */}
          <button>
            <span className="ir_pm">검색</span>
          </button>
        </BundleInp>
      </WrapSearch>
      <ResultText>
        검색 결과 <ResultNumber>{data.countData}</ResultNumber>건
      </ResultText>
    </SubTit>
  );
}

export default SearchContainer;