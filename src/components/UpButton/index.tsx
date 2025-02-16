import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import styled from 'styled-components';

const UpButtonStyle = styled.button`
  position: fixed;
  /* bottom: -4px; */
  bottom: 20px; /* 버튼 위치가 화면 밖으로 안 나가도록 수정 */
  right: 2px;
  transform: translate(-50%, -50%);
  padding: 4px 10px;
  font-weight: bold;
  border-radius: 100%;
  background-color: white;
  padding: 8px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`;


function UpButton() {

  return (
    <UpButtonStyle>
      <FontAwesomeIcon icon={faChevronUp} size="2x" />
    </UpButtonStyle>
  );
}

export default UpButton;