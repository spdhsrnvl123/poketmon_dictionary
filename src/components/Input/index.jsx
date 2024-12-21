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

const Input = () => {
  const ref = useRef();
  const [handleChange] = useInput();

  useEffect(() => {
    ref.current.focus();
  });

  return (
    <StyledInput
      onChange={handleChange}
      ref={ref}
      type="text"
      placeholder="직무, 기술 키워드를 검색해보세요."
    />
  );
};

export default Input;
