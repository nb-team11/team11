import React, { useState } from 'react';
import {
  StyledCategory,
  StyledCategoryAndMapApi,
  StyledCategoryBox,
  StyledContainer,
  StyledMapContainer,
  StyledTitle
} from './SelectCategory.style';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/UploadPostSlice';
import MyMapApi from './../MapApi/MyMapApi';

const SelectCategory = () => {
  // 상위에서 category state 만들어서 props로 전달하는 방식으로 변경하기

  const dispatch = useDispatch();
  const category = useSelector((state) => state.UploadPostSlice.category);

  const categoryList = ['취미', '가족', '스터디', '운동', '회사', '동호회', '학교', '친목', '기타'];

  const handleClickCategory = (item) => {
    dispatch(setCategory(item));
  };

  return (
    <StyledCategoryAndMapApi>
      <StyledMapContainer>
        {/* 여기 */}
        {/* <MapApI /> */}
        <MyMapApi />
      </StyledMapContainer>
      <StyledContainer>
        <StyledTitle>만들고 싶은 모임을 선택해주세요.</StyledTitle>
        <StyledCategoryBox>
          {categoryList.map((item) => {
            return (
              <StyledCategory
                key={item}
                onClick={() => handleClickCategory(item)}
                $bgc={item === category ? '#ffd532' : '#ffe88e'}
              >
                {item}
              </StyledCategory>
            );
          })}
        </StyledCategoryBox>
      </StyledContainer>
    </StyledCategoryAndMapApi>
  );
};

export default SelectCategory;
