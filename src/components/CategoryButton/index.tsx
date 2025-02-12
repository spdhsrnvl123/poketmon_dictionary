import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

const CategoryButtonStyle = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 2px;
  img {
    width: 20px;
    margin-bottom: -5px;
  }
  span {
    font-weight: bold;
  }
`;

interface CategoryButtonProps {
  type : string;
}

function CategoryButton({type}:CategoryButtonProps) {
  return (
    <CategoryButtonStyle>
      <img src={logo} alt="" />
      <span>{type}</span>
    </CategoryButtonStyle>
  );
}

export default CategoryButton;
