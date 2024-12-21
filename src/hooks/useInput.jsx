import { useDispatch } from "react-redux";
import { InputData } from "../store/search";

export const useInput = () => {
  let dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(InputData(e.target.value));
  };

  return [handleSearch];
};
