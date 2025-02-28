import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import ReactApexChart from "react-apexcharts";
import { getPokemonDetailData } from "../../store/pokemonsDetail";

interface ApexChartOptions {
  chart: {
    height: number;
    type: "radar";
    toolbar: {
      show: boolean;
    }
  };
  yaxis: {
    stepSize: number;
  };
  xaxis: {
    categories: string[];
  };
}

interface Series {
  name: string;
  data: number[];
}

interface State {
  series: Series[];
  options: ApexChartOptions;
}

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #3b3f5c;
  text-align: center;
  padding-top: 30px;
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

const Description = styled.div`
  color: #3B3F5C;
  text-align: center;
  padding: 20px;
`;

const Stats = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #3b3f5c;
  text-align: center;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function PokemonsDetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { poketmonId } = useParams();
  const data = useSelector((state: RootState) => state);

  useEffect(() => {
    if (typeof poketmonId === "string") {
      dispatch(getPokemonDetailData(poketmonId));
    }
  }, [dispatch, poketmonId]);

  const pokemonName = data.pokemonDetailData.value?.name || "Loading...";

  // stats 데이터를 차트 데이터로 변환
  const stats = data.pokemonDetailData.value?.stats || {};
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

  useEffect(() => {
    if (data.pokemonDetailData.value) {
      const stats = data.pokemonDetailData.value.stats || {};
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
  }, [data.pokemonDetailData.value]);

  const item = data.pokemonData.value.filter((v) => {
    return v.name === pokemonName;
  });

  return (
    <Modal>
      <Title>{pokemonName}</Title>
      <Description>{item[0]?.description}</Description>
      <Img src={item[0]?.imageUrl} alt="" />
      <Stats>Stats</Stats>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radar"
          height={300}
        />
      </div>
      <Button onClick={() => navigate("/poketmon_dictionary")}>X</Button>
    </Modal>
  );
}

export default PokemonsDetailPage;
