import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";

const StyledInput = styled.input`
  width: 400px;
  height: 43px;
  padding: 9px 18px;
  font-size: 15px;
  line-height: 43px;
  color: rgba(0, 0, 0, 0.8);
  border: 0 none;
  border-radius: 25px;
  box-sizing: border-box;
  outline: none;
`;

const ButtonStyle = styled.button`
  position: absolute;
  top: 9px;
  right: 18px;
  width: 23px;
  height: 23px;

  &::before {
    position: absolute;
    left: 3px;
    top: 3px;
    width: 15px;
    height: 15px;
    border: 2px solid #3377ff;
    border-radius: 50%;
    box-sizing: border-box;
    content: "";
  }
  &::after {
    position: absolute;
    right: 3px;
    bottom: 4px;
    width: 6px;
    /* height: 15px; */
    border-top: 2px solid #3377ff;
    border-radius: 5px;
    transform: rotate(45deg);
    content: "";
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Input = () => {
  const ref = useRef();
  const [handleSearch, handleSubmit ] = useInput();

  useEffect(() => {
    ref.current.focus();
  });

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        onChange={handleSearch}
        ref={ref}
        type="text"
        placeholder="직무, 기술 키워드를 검색해보세요."
      />
      <ButtonStyle />
    </form>
  );
};

export default Input;