import styled from "styled-components"
import Button from "../../base/Button"
import Input from "../../base/Input"
import SearchCount from "../../base/SearchCount"

const SubTit = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 223px;
    background-color: #333333;
`
const Strong = styled.strong`
    font-size: 27px;
    font-weight: normal;
    color: #fff;
    text-align: center;
    margin-bottom: 15px;
`
const WrapSearch = styled.div`
    margin: 8px 0 14px;
`
const BundleInp = styled.div`
    position: relative;
    width: 400px;
    margin: 0 auto;
    border-radius: 25px;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, .4);
`

const Nav = ()=>{
    return(
        <div className="container-search">
            <SubTit>
                <Strong>DKTechin 구인 현황</Strong>
                <WrapSearch>
                    <BundleInp>
                        <Input />
                        <Button><span className="ir_pm">검색</span></Button>
                    </BundleInp>
                </WrapSearch>
                <SearchCount />
            </SubTit>
        </div>
    )
}

export default Nav;