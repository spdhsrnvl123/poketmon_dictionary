import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonById } from "../../store/pokemonDetail";
import { AppDispatch, RootState } from "../../store/store";
import ReactApexChart from "react-apexcharts";

// ApexChart 옵션에 대한 타입 정의
interface ApexChartOptions {
  chart: {
    height: number;
    type: "radar"; // 차트의 타입을 'radar'로 고정
    toolbar: {
      show: boolean; // 🔹 햄버거 메뉴 제거
    };
  };
  yaxis: {
    stepSize: number;
  };
  xaxis: {
    categories: string[];
  };
}

// series에 대한 타입 정의
interface Series {
  name: string;
  data: number[];
}

// state에 대한 타입 정의
interface State {
  series: Series[];
  options: ApexChartOptions;
}

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #3b3f5c;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  font-size: 26px;
  color: #989898;
  background-color: transparent;
  text-shadow: 2px 1px 3px rgba(233, 183, 183, 0.274);
  animation: represent 0.7s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
`;

function CardDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { poketmonId } = useParams();

  const data = useSelector((state: RootState) => state);
 
  useEffect(() => {
    if (typeof poketmonId === "string") {
      dispatch(fetchPokemonById(poketmonId));
    }
  }, [dispatch, poketmonId]);

  // pokemonDetailSlice.value가 없으면 기본값 설정
  const pokemonName = data.pokemonDetailSlice.value?.name || "Loading...";

  // stats 데이터를 차트 데이터로 변환
  const stats = data.pokemonDetailSlice.value?.stats || {};
  const categories = [
    "Attack",
    "Defense",
    "HP",
    "Special Attack",
    "Special Defense",
    "Speed",
  ];
  const statValues = [
    stats.attack || 0,
    stats.defense || 0,
    stats.hp || 0,
    stats.specialAttack || 0,
    stats.specialDefense || 0,
    stats.speed || 0,
  ];

  const [state, setState] = useState<State>({
    series: [
      {
        name: "Stats",
        data: statValues,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
        toolbar: {
          show: false, // 🔹 햄버거 메뉴 제거
        },
      },
      yaxis: {
        stepSize: 30,
      },
      xaxis: {
        categories: categories,
      },
    },
  });

  // pokemonDetailSlice.value가 업데이트되면 chart 업데이트
  useEffect(() => {
    if (data.pokemonDetailSlice.value) {
      const stats = data.pokemonDetailSlice.value.stats || {};
      const statValues = [
        stats.attack || 0,
        stats.defense || 0,
        stats.hp || 0,
        stats.specialAttack || 0,
        stats.specialDefense || 0,
        stats.speed || 0,
      ];
      setState((prevState) => ({
        ...prevState,
        options: {
          ...prevState.options,
        },
        series: [{ name: "Stats", data: statValues }],
      }));
    }
  }, [data.pokemonDetailSlice.value]);

  return (
    <Modal>
      <Title>{pokemonName}</Title>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radar"
          height={350}
        />
      </div>
      <Button onClick={() => navigate("/poketmon_dictionary")}>X</Button>
    </Modal>
  );
}

export default CardDetail;
