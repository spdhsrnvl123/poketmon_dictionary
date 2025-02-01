import React from 'react'
import styled from 'styled-components';

const ModalContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  animation: represent 0.6s ease-in-out;
`;

function Modal() {
  return (
    <ModalContainer>
        <ModalContent>모달창</ModalContent>
    </ModalContainer>
  )
}

export default Modal;