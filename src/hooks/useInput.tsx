import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { setSearchResults } from "../store/search";

export const useInput = () :[
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.FormEvent<HTMLFormElement>) => void
] => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  const ref = useRef<HTMLInputElement>(null);

  // 입력창 텍스트 검사
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setSearchData(e.target.value);
    } else if (e.target.value === "") {
      setSearchData("");
    }
  };

  // 텍스트 조회
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchResults(searchData));
    if (ref.current) {
      ref.current.blur();
    }
  };

  return [searchData, handleSearch, handleSubmit];
};
