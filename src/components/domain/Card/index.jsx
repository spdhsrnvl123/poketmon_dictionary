import styled from "styled-components";

const List = styled.li`
    &::before{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3px;
        height: 100%;
        font-size: 10px;
        color: #fff;
        font-weight: bold;
        letter-spacing: -1px;
        content: 'NEW';
        opacity: ${props => props.transparency};
    }

    &::after{
        position: absolute;
        top: 12px;
        left: -17px;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        margin-right: 10px;
        font-size: 40px;
        /* color: #ffdd00; */
        content: "\f0a4";
        opacity: ${props => props.transparency};
    }
`

const TitleJob = styled.div`
    margin-left: 20px;
    padding: 0 5px;
    strong{
        display: block;
        font-size: 16px;
        font-weight: bold;
        line-height: 21px;
        em{
            display: inline-block;
            margin-left: 10px;
            font-size: 12px;
            color: #999999;
        }
    }
    .link_title{
        display:inline-block;
    }
`

const BundleBadge = styled.span`
    overflow-x: scroll;
    display: block;
    margin-top: 5px;
    font-size: 0;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar{
        display: none;
    }

    a{
        display: inline-block;
        height: 21px;
        padding: 0 8px;
        font-size: 10px;
        color: #808080;
        line-height: 21px;
        background-color: #F0F0F0;
        border-radius: 3px;
        box-sizing: border-box;
        & + a{
            margin-left: 5px;
        }
    }
`

const DescJob = styled.div`
    padding : 0 25px 0 5px;
    text-align: right;
`

const WrapTxt = styled.div`
    margin-top: 9px;
    font-size: 0;

    span{
        & + span{
            margin-left:10px;
        }
    }
`

const BadgeType= styled.span`
    display: inline-block;
    height: 21px;
    padding: 0 7px;
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    line-height: 21px;
    border-radius: 3px;
    border-radius: 100px;
    background-color: #415a8d;
`

const Location = styled.span`
    display: inline-block;
    font-size: 12px;
    &::before{
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        margin-right: 5px;
        font-size: 10px;
        content: "\f3c5";
    }
`
const Day = styled.span`
    display: inline-block;
    font-size: 12px;
    &::before{
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
        margin-right: 5px;
        font-size: 10px;
        content: "\f017";
    }
`

const Card = ({item})=>{
    const getDate = ()=>{
        const dateA = new Date('2023-02-18');
        const dateB = new Date(item.createdAt.slice(0,10));
        return Math.floor((dateA.getTime() - dateB.getTime())/(24 * 60 * 60 * 1000));
    }

    const resentData = ()=>{
        if(getDate() === 0){
            return "today"
        }else if(getDate() === 1){
            return "1 day ago"
        }else if(getDate() === 2){
            return "2 day ago"
        }else{
            return item.createdAt.slice(0,10)
        }
    }

    return(
        <>
            <List transparency = { getDate() <= 2  ? 1 : 0}>
                <TitleJob>
                    <a href="#none" className="link_title">
                        <strong>{item.title}<em>{item.type}</em></strong>
                    </a>
                    <BundleBadge>
                        {item.keywords.map((v,i)=>{
                            return(
                                <a key={i} href="#none">{v}</a>
                            )
                        })}
                    </BundleBadge>
                </TitleJob>
                <DescJob>
                    <BadgeType>{item.job}</BadgeType>
                    <WrapTxt>
                        <Day>{resentData()}</Day>
                        <Location>{item.location}</Location>
                    </WrapTxt>
                </DescJob>
            </List>
        </>
    )
}

export default Card