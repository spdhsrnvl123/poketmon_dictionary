import { useEffect } from "react";
import { asyncUpFetch } from "../store/card";
import { useDispatch, useSelector } from "react-redux";
import { UpdateNumber } from "../store/count";

export const useFilter = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncUpFetch());
    console.log("렌더링")    
  }, []);
  

    const filteredData = data.cardData.value.filter((item) => {
      const keyword = item.keywords.join().toLowerCase();
      if (data.searchData === "") {
        return item;
      } else if (item.title.includes(data.searchData)) {
        return item;
      } else if (keyword.includes(data.searchData.toLowerCase())) {
        return item;
      } else {
        return null;
      }
    });


  return [filteredData];
};
