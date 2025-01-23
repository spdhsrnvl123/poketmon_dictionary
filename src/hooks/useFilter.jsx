import { useEffect, useState } from "react";
import { asyncUpFetch } from "../store/card";
import { useDispatch, useSelector } from "react-redux";
import { UpdateNumber } from "../store/count";

export const useFilter = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [filteredData, setFilteredData] = useState(null);

  //데이터 받아오기
  useEffect(() => {
    dispatch(asyncUpFetch());
  }, []);

  // console.log(data);

  //필터링 로직
  useEffect(() => {
      const result = data.cardData.value.filter((item) => {
        const keyword = item.name.toLowerCase();
        if (data.searchResults === "") {
          return item;
        } else if (keyword.includes(data.searchResults)) {
          return item;
        } else if (keyword.includes(data.searchResults.toLowerCase())) {
          return item;
        } else {
          return null;
        }
      });
      //검색된 필터링 아이템
      setFilteredData(result);
      //검색된 필터링 아이템 카운트
      dispatch(UpdateNumber(result.length))
  }, [data]);

  return [filteredData];
};
