import React from "react";
import Modal from "../../components/Modal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Button = styled.button`
  width: 40px;
  height: 40px;
  font-size: 26px;
  color: black;
  background-color: aliceblue;
  text-shadow: 2px 1px 3px rgba(233, 183, 183, 0.274);
  animation: represent 0.7s ease-in-out;
`;

function CardDetail() {
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate("/");
  };
  return (
    <Modal>
      포켓몬 상세페이지
      <Button onClick={handleModalClose}>X</Button>
    </Modal>
  );
}

export default CardDetail;
