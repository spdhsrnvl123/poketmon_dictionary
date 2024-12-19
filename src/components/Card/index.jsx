import styled from "styled-components";
import { FaCalendarDay } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const List = styled.li`
  position: relative;
  &::before {
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
    content: "NEW";
    opacity: ${(props) => props.transparency};
  }

  &::after {
    position: absolute;
    top: 12px;
    left: -17px;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 10px;
    font-size: 40px;
    /* color: #ffdd00; */
    content: "\f0a4";
    opacity: ${(props) => props.transparency};
  }
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
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 20%;
  background-color:#f7fafe;
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

const Card = ({ item }) => {
  const dateA = new Date("2024-12-07");
  const dateB = new Date(item.createdAt.slice(0, 10));

  //현재 날짜와 공고된 날짜의 차이를 계산하는 메서드
  const getDate = () => {
    return Math.floor(
      (dateA.getTime() - dateB.getTime()) / (24 * 60 * 60 * 1000)
    );
  };

  const resentData = () => {
    if (getDate() === 0) {
      return "today";
    } else if (getDate() === 1) {
      return "1 day ago";
    } else if (getDate() === 2) {
      return "2 day ago";
    } else {
      return item.createdAt.slice(5, 10);
    }
  };

  return (
    <>
      <List transparency={getDate() <= 2 ? 1 : 0}>
        <TitleJob>
          <a href="#none" className="link_title">
            <strong>
              {item.title}
              <em>{item.type}</em>
            </strong>
          </a>
          <BundleBadge>
            {item.keywords.map((v, i) => {
              return (
                <a key={i} href="#none">
                  {v}
                </a>
              );
            })}
          </BundleBadge>
        </TitleJob>
        <DescJob>
          <BadgeType>{item.job}</BadgeType>
          <WrapTxt>
            <Day>
              <FaCalendarDay />~{resentData()}
            </Day>
            <Location>
              <FaLocationDot />
              {item.location}
            </Location>
          </WrapTxt>
        </DescJob>
      </List>
    </>
  );
};

export default Card;
