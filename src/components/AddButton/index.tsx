import React from 'react'
import styled from 'styled-components';

const AddButtonStyle = styled.button`
  background-color: #ffcc00;
  position: fixed;
  bottom: 8px;
  left:50%;
  transform: translate(-50%,-50%);
  color:white;
  padding: 4px 10px;
  font-weight: bold;
  border-radius: 50px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.2);
`;

function AddButton() {
  return <AddButtonStyle>See more Pokemon</AddButtonStyle>;
}

export default AddButton;