import styled from "styled-components";
import { FaCalendarDay } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

// const List = styled.li`
//   position: relative;
//   &::before {
//     position: absolute;
//     left: 0;
//     top: 0;
//     z-index: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 3px;
//     height: 100%;
//     font-size: 10px;
//     color: #fff;
//     font-weight: bold;
//     letter-spacing: -1px;
//     content: "NEW";
//     opacity: ${(props) => props.transparency};
//   }

//   &::after {
//     position: absolute;
//     top: 12px;
//     left: -17px;
//     font-family: "Font Awesome 5 Free";
//     font-weight: 900;
//     margin-right: 10px;
//     font-size: 40px;
//     /* color: #ffdd00; */
//     content: "\f0a4";
//     opacity: ${(props) => props.transparency};
//   }
// `;
const List = styled.li`
  align-items: center;
  height: 86px;
  /* padding: 18px; */
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  /* background-color: skyblue; */
  margin: 22px; /* 좌우는 중앙 정렬, 위아래만 22px */
`;

const TitleJob = styled.div`
  margin-left: 2px;
  padding: 0 5px;
  strong {
    display: block;
    font-size: 16px;
    font-weight: bold;
    line-height: 21px;
    em {
      display: inline-block;
      margin-left: 10px;
      font-size: 12px;
      color: #999999;
    }
  }
  .link_title {
    display: inline-block;
  }
`;

const BundleBadge = styled.span`
  overflow-x: scroll;
  display: block;
  margin-top: 5px;
  font-size: 0;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    display: inline-block;
    height: 21px;
    padding: 0 8px;
    font-size: 10px;
    color: #808080;
    line-height: 21px;
    background-color: #f0f0f0;
    border-radius: 3px;
    box-sizing: border-box;
    & + a {
      margin-left: 5px;
    }
  }
`;

const DescJob = styled.div`
  /* position: absolute; */
  /* height: 100%; */
  /* top: 0; */
  /* right: 0; */
  background-color: #c6c6c6;
`;

const WrapTxt = styled.div`
  span {
    & + span {
      margin-left: 10px;
    }
  }
`;

const BadgeType = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 7px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: #415a8d;
  white-space: nowrap;
`;

const Location = styled.div`
  position: absolute;
  bottom: 18px;
  right: 2px;
  font-size: 12px;
  white-space: nowrap;
`;

const Day = styled.div`
  position: absolute;
  bottom: 0;
  right: 2px;
  font-size: 12px;
  white-space: nowrap;
`;

const Content = styled.div`
  display: flex;
`

const Card = ({ item }) => {
  return (
    <>
      {/* <List transparency={getDate() <= 2 ? 1 : 0}> */}
      <List>
        <TitleJob>
          <Content>
            <img src={item.imageUrl} />
            <a href="#none" className="link_title">
              <strong>
                {item.name}
                <em>{item.types.join(",")}</em>
              </strong>
            </a>
            <p>{item.description}</p>
          </Content>

          {/* <BundleBadge> */}
            {/* {item.keywords.map((v, i) => {
              return (
                <a key={i} href="#none">
                  {v}
                </a>
              );
            })} */}
          {/* </BundleBadge> */}
        </TitleJob>
        <DescJob>
          <BadgeType>{item.job}</BadgeType>
          <WrapTxt>
            <Day>{/* <FaCalendarDay />~{resentData()} */}</Day>
            <Location></Location>
          </WrapTxt>
        </DescJob>
      </List>
    </>
  );
};

export default Card;
