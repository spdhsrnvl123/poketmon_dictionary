import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateNumber } from "../store/count";
import { AppDispatch, RootState } from "../store/store";
import { Pokemon } from "../types/pokemons";

export const useFilter = () => {
  const data = useSelector((state: RootState) => state);
  const [filteredData, setFilteredData] = useState<Pokemon[] | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  // 검색별 & 타입별 포켓몬 필터링
  useEffect(() => {
    const result = data.pokemonData.value.filter((item : Pokemon) => {
      const keyword = item.name.toLowerCase();
      const types = item.types;

      const matchsKeyword = data.searchResults.keyword.toLowerCase();
      const matchsType = data.searchResults.filterType;

      if (matchsKeyword === "" && matchsType === "All") {
        return item;
      } else if (types.includes(matchsType) && matchsKeyword === "") {
        return item;
      } else if(keyword.includes(matchsKeyword) && matchsType === "All"){
        return item;
      } else if(types.includes(matchsType) && keyword.includes(matchsKeyword)){
        return item;
      } else {
        return null;
      }
    });
    //검색된 필터링 아이템
    setFilteredData(result);
    //검색된 필터링 아이템 카운트
    dispatch(UpdateNumber(result.length));
  }, [data]);

  return [filteredData];
};
