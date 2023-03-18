import { useEffect, useRef } from "react"
import { useDispatch} from "react-redux"
import styled from "styled-components"
import { InputData } from "../../../redux/search"

const Search = styled.input`
    width: 400px;
    height: 43px;
    padding: 9px 18px;
    font-size: 15px;
    line-height: 43px;
    color: rgba(0, 0, 0, .8);
    border: 0 none;
    border-radius: 25px;
    box-sizing: border-box;
    outline: none;
`

const Input = ()=>{
    const ref = useRef();

    useEffect(()=>{
        ref.current.focus()
    })
    // let item = useSelector((state)=> state);
    let dispatch = useDispatch();
    const onSearch = (e)=>{
        dispatch(InputData(e.target.value))
    }

    // console.log(item.searchData)

    return(
        <Search onChange={onSearch} ref={ref} type="text" placeholder="직무, 기술 키워드를 검색해보세요." />
    )
}

export default Input