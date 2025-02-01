import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "../../hooks/useFilter";
import { useInput } from "../../hooks/useInput";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 293px);
  overflow: scroll;
  padding-top:29px;
  background-color: #f8f8f9;
`;

const ContentArticle = styled.div`
  h3 {
    text-align: center;
  }
`;

const ListJob = styled.ul`
  img {
    display: block;
    margin: 0 auto;
  }
`;

const CardBoxPage = () => {
  const [res, setRes] = useState(null)
  const data = useSelector((state)  => state);
  const [filteredData] = useFilter();
  const [isSearching] = useInput();
  const dispatch = useDispatch();
 
  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  return (
    <>
      <MainContent>
        <ContentArticle>
          <h3>
            <button style={{ color: "#999" }}>See more Pokemon</button>
          </h3>
          <ListJob>
            {data.cardData.status === "Loading" ? (
              <span style={{ color: "blue", fontSize: "18px" }}>로딩중...</span>
            ) : (
              filteredData?.map((value, index) => {
                return <Card key={index} item={value} />;
              })
            )}
          </ListJob>
        </ContentArticle>
      </MainContent>
    </>
  );
};

export default CardBoxPage;
