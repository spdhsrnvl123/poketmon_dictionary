import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { asyncUpFetch } from "../../store/card";
import { AppDispatch, RootState } from "../../store/store";
import { Pokemon } from "../../types/pokemon";
import Modal from "../Modal";

const AddButtonStyle = styled.button`
  background-color: #ffcc00;
  position: fixed;
  bottom: 8px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 4px 10px;
  font-weight: bold;
  border-radius: 50px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const AddTextStyle = styled.div`
  background-color: #bed96e;
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
`;

function AddButton() {
  const dispatch = useDispatch<AppDispatch>();
  const [number, setNumber] = useState(0);
  const pokemonData = useSelector<RootState, any>((state) => state.cardData);
  const [showMessage, setShowMessage] = useState(false);
  const [showMessage_limit, setShowMessage_limit] = useState(false);


const addHandler = () => {
  // 포켓몬 데이터가 1000개 이상이면 더 이상 요청을 보내지 않음
  if (pokemonData.value.length >= 1000) {
    setShowMessage_limit(true); // 메시지 보이기
    setTimeout(() => {
      setShowMessage_limit(false); // 2초 후에 메시지 숨기기
    }, 2000); // 2초 후에 실행
    return; // 요청을 더 이상 보내지 않도록 종료
  }

  // 200개 단위로 요청
  if (pokemonData.value.length === 200) {
    setNumber((number) => number + 200);
    dispatch(asyncUpFetch(number));
  }
  if (pokemonData.value.length === 400) {
    setNumber((number) => number + 200);
    dispatch(asyncUpFetch(number));
  }
  if (pokemonData.value.length === 600) {
    setNumber((number) => number + 200);
    dispatch(asyncUpFetch(number));
  }
  if (pokemonData.value.length === 800) {
    setNumber((number) => number + 200);
    dispatch(asyncUpFetch(number));
  }

  console.log(number);

  setShowMessage(true); // 메시지 보이기
  setTimeout(() => {
    setShowMessage(false); // 2초 후에 메시지 숨기기
  }, 2000); // 2초 후에 실행
};

  return (
    <>
      {showMessage && <AddTextStyle>Added!!</AddTextStyle>}
      {showMessage_limit && <AddTextStyle>Up to 1000 units provided!!</AddTextStyle>}
      <AddButtonStyle onClick={addHandler}>See more Pokemon</AddButtonStyle>;
    </>
  );
}

export default AddButton;
