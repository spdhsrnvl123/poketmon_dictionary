import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { UpdateNumber } from "../../store/count";
// import { useFilter } from "../../hooks/useFilter";
import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "../../hooks/useFilter";
import { useInput } from "../../hooks/useInput";
import { asyncUpFetch } from "../../store/card";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 293px);
  overflow: scroll;
  padding-top:29px;
  background-color: #f8f8f9;
`;

const ContentArticle = styled.div`
  /* grid-area: content; */
  /* width: 700px; */
  h3 {
    text-align: center;
  }
`;

const ListJob = styled.ul`
  width: 100%;
  img {
    display: block;
    margin: 0 auto;
  }
`;

const CardBoxPage = () => {
  const [res, setRes] = useState(null)
  const data = useSelector((state) => state);
  const [filteredData] = useFilter();
  const [isSearching] = useInput();
  const dispatch = useDispatch();


  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  // useEffect(() => {
  //   dispatch(UpdateNumber(filteredData.length));
  //   console.log("렌더링");
  // }, []);

  return (
    <>
        <h2 className="screen_out">채용 데모 페이지 본문</h2>
        <MainContent>
          <ContentArticle>
            <h3>
              <span style={{ color: "#999" }}>Poketmon List</span>
            </h3>
            <ListJob>
              {data.cardData.status === "fail" ? (
                <span style={{ color: "red", fontSize: "18px" }}>
                  통신과정에서 에러가 발생하였습니다.
                </span>
              ) : (
                filteredData?.map((value, index) => {
                  return <Card key={index} item={value} />;
                })
                // <span>검색중..</span>
              )}
            </ListJob>
          </ContentArticle>
        </MainContent>
    </>
  );
};

export default CardBoxPage;
