import { useSelector } from "react-redux"
import styled from "styled-components"

const ResultText = styled.p`
    font-size: 20px;
    color: #fff;
    text-align: center;
`

const ResultNumber = styled.em`
    color: #ffdd00;
`

const SearchCount = ()=>{
    const data = useSelector((state)=>state);

    return(
        <ResultText>검색 결과 <ResultNumber>{data.countData}</ResultNumber>건</ResultText>
    )
}

export default SearchCount;