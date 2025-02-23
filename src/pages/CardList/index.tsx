import styled from "styled-components";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "../../hooks/useFilter";
import { RootState } from "../../store/store";
import { Outlet } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { useEffect, useRef } from "react";
import { asyncUpFetch } from "../../store/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  height: calc(88vh - 235px);
  overflow: scroll;
  background-color: #f8f8f9;
`;

const ContentArticle = styled.div`
  h3 {
    text-align: center;
  }
`;

const ListJob = styled.ul`
`;

const UpButtonStyle = styled.button`
  position: fixed;
  /* bottom: -4px; */
  bottom: 20px; /* 버튼 위치가 화면 밖으로 안 나가도록 수정 */
  right: 2px;
  transform: translate(-50%, -50%);
  padding: 4px 10px;
  font-weight: bold;
  border-radius: 100%;
  background-color: white;
  padding: 8px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

const CardList = () => {
  const data = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(asyncUpFetch(0));
  }, []);
  const [filteredData] = useFilter();

  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleScrollToTop = (): void => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log(data.countData)

useEffect(()=>{
  handleScrollToTop()
},[data.countData])

  return (
    <>
      <MainContent>
        <ContentArticle ref={mainContentRef}>
          <ListJob>
            {data.cardData.status === "Loading" ? (
              <span style={{ color: "blue", fontSize: "18px" }}>로딩중...</span>
            ) : (
              filteredData?.map((value, index) => {
                return <Card key={`${value.id}-${index}`} item={value} index={index} />;
              })
            )}
          </ListJob>
          <Outlet />
          <UpButtonStyle onClick={handleScrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} size="2x" />
          </UpButtonStyle>
        </ContentArticle>
      </MainContent>
    </>
  );
};

export default CardList;
