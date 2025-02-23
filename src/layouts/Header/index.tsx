import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import styled from "styled-components";

function Header() {
    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;
    `

  const StyledImage = styled.img`
    width: 43px;
    height: 60px;
  `;

  const Title = styled.h1`
    color: #fff9f9;
    text-align: center;
    font-size: 31px;
    font-family: Gluten;
    -webkit-text-stroke: 2.2px #ffcc00;
    cursor: pointer;
    letter-spacing: 1px;
    span {
      font-size: 19px;
      display: block;
      letter-spacing: 1px;
      margin-top: -16px;
    }
  `;
  return (
    <Container>
      <StyledImage src={logo} alt="logo" />
      <Title>
        Pokemon <span>dictionary</span>
      </Title>
      <FontAwesomeIcon onClick={()=>alert("준비중입니다.")} icon={faBars} size="2x" />
    </Container>
  );
}

export default Header;
