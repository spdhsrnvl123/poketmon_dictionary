import styled from "styled-components";

const List = styled.li`
  align-items: center;
  height: 86px;
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  margin: 22px;
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
        </TitleJob>
        <DescJob>
          <BadgeType>{item.job}</BadgeType>
          <WrapTxt>
            <Location></Location>
          </WrapTxt>
        </DescJob>
      </List>
    </>
  );
};

export default Card;
