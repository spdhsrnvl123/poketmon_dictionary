import styled from "styled-components"

const ButtonStyle = styled.button`
    position: absolute;
    top: 9px;
    right: 18px;
    width: 23px;
    height: 23px;

    &::before{
        position: absolute;
        left: 3px;
        top: 3px;
        width: 15px;
        height: 15px;
        border: 2px solid #3377FF;
        border-radius: 50%;
        box-sizing: border-box;
        content: '';
    }
    &::after{
        position: absolute;
        right: 3px;
        bottom: 4px;
        width: 6px;
        /* height: 15px; */
        border-top: 2px solid #3377FF;
        border-radius: 5px;
        transform: rotate(45deg);
        content: '';
    }
    &:hover{
        opacity: .8;
    }
`

const Button = ()=>{
    return(
        <ButtonStyle />
    )
}

export default Button