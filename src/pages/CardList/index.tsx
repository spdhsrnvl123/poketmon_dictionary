import styled from "styled-components";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "../../hooks/useFilter";
import { RootState } from "../../store/store";
import { Outlet } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { asyncUpFetch } from "../../store/card";
import UpButton from "../../components/UpButton";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 293px);
  overflow: scroll;
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

const CardList = () => {
  const data = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(asyncUpFetch(0));
  }, []);
  const [filteredData] = useFilter();

  return (
    <>
      <MainContent>
        <ContentArticle>
          <ListJob>
            {data.cardData.status === "Loading" ? (
              <span style={{ color: "blue", fontSize: "18px" }}>로딩중...</span>
            ) : (
              filteredData?.map((value,index) => {
                return <Card key={`${value.id}-${index}`} item={value} />;
              })
            )}
            <UpButton />
          </ListJob>
          <Outlet />
        </ContentArticle>
      </MainContent>
    </>
  );
};

export default CardList;
