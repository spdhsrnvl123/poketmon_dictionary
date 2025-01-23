import { useDispatch } from "react-redux";
import { useState } from "react";
import { setSearchResults } from "../store/search";

export const useInput = () => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    console.log(e.target.value);
    if(e.target.value !== ""){
        setSearchData(e.target.value);
    }else if(e.target.value === ""){
        setSearchData("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchResults(searchData));
  }

  return [handleSearch, handleSubmit];
};
