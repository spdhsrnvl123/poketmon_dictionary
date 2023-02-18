import styled from "styled-components";

const DocFooter = styled.footer`
    /* grid-area: footer; */
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    z-index: 2; //footer 문제로 z-index 추가.

    .inner_footer{
        display: flex;
        justify-content: space-between;
        width: 916px;
        margin: 0 auto;
        padding-top: 22px;
        small{
            font-size: 12px;
            line-height: 21px;
            color: #999;
        }
        .area_link{
            span{
                margin-left: 10px;
                font-size: 14px;
                color: #999;
            }
        }
    }
`

const Footer = ()=>{
    return(
        <DocFooter>
            <div className="inner_footer">
            <small>&copy; 2023 MEGA MELON</small>
            <div className="area_link">
                <span>회사소개</span>
                <span>채용절차</span>
                <span>직무소개</span>
            </div>
            </div>
        </DocFooter>
    )
}

export default Footer;