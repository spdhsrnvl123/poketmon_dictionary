import { useSelector } from "react-redux";
import styled from "styled-components"
import Input from "../Input";
import bgImage from "../../assets/images/bg.jpg"
import { RootState } from "../../store/store";

const SubTit = styled.nav`
  display: grid;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 223px;
  background-image: url(${bgImage});
  background-size: cover; /* 배경 이미지를 컨테이너에 맞게 꽉 채움 */
  background-position: center; /* 이미지 중앙에 고정 */
  background-repeat: no-repeat; /* 배경 반복 없음 */
`;

const WrapSearch = styled.div`
    margin: 8px 0 14px;
`

const BundleInp = styled.div`
    position: relative;
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
`;

const SearchContainer = ()=>{
  const data = useSelector((state: RootState) => state);

  return (
    <SubTit>
      <WrapSearch>
        <BundleInp>
          <Input />
        </BundleInp>
      </WrapSearch>
      <ResultText>
        Search results <ResultNumber>{data.countData}</ResultNumber>건
      </ResultText>
    </SubTit>
  );
}

export default SearchContainer;