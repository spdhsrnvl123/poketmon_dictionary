import styled from "styled-components";
import { Pokemon } from "../../types/pokemon";
import { useNavigate } from "react-router-dom";
import circle from "../../assets/images/circle.gif"

const List = styled.li`
  align-items: center;
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  margin: 22px;
  cursor: pointer;
  max-width: 334px;
  height: 80px;
  border-radius: 10px;
`;

const TitleJob = styled.div`
  margin-left: 2px;
  padding: 0 5px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    background-image: url(${circle});
    background-size: contain;
    border-radius: 100%;
  }
  .description {
    display: flex;
    flex-direction: column;
    margin-left: 21px;
    .name {
      font-size: 16px;
      font-weight: bold;
      color: #3b3f5c;
    }
    span {
      font-weight: bold;
      color: #B8BBD6;
    }
  }
`;

interface CardProps {
  item: Pokemon; // item은 Pokemon 타입
}

const Card = ({ item } : CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`poketmon/${item.id}`);
  };

  return (
    <>
      <List onClick={handleClick}>
        <TitleJob>
          <Content>
            <img src={item.imageUrl} alt="" />
            <div className="description">
              <a href="#none" className="name">
                {item.name}
              </a>
              <span>{item.types.join(",")}</span>
              <p>
                {item.description.length > 80 ? item.description.slice(0, 80) + "..." : item.description}
              </p>
            </div>
          </Content>
        </TitleJob>
      </List>
    </>
  );
};

export default Card;
