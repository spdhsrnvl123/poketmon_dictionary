import React from 'react'
import CategoryButton from '../../components/CategoryButton'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const CategoryContent = styled.div`
  padding: 12px 22px;
  display: flex;
  max-width: 334px;
  margin: 0 auto;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #888;

  &:hover {
    color: #333;
  }

  &:first-of-type {
    left: 0; // 왼쪽 화살표 위치
  }

  &:last-of-type {
    right: 0; // 오른쪽 화살표 위치
  }
`;


function Category() {
  const data = useSelector((state: RootState) => state);

  const types2 = data.cardData.value.map((value)=>{
    const typeObj : string[] = []
    typeObj.push(...value.types);

    return typeObj;
  })

  const types = Array.from(new Set(types2.flat()));

  
  return (
    <CategoryContent>
      <ArrowButton className="swiper-button-prev">
        <FontAwesomeIcon icon={faCaretLeft} />
      </ArrowButton>
      <Swiper
        spaceBetween={6}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CategoryButton type={"All"} />
        </SwiperSlide>
        {types.map((type) => {
          return (
            <SwiperSlide key={type}>
              <CategoryButton type={type} key={type} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ArrowButton className="swiper-button-next">
        <FontAwesomeIcon icon={faCaretRight} />
      </ArrowButton>
    </CategoryContent>
  );
}

export default Category