import React, { useState } from 'react';
import { StyledCategory, StyledCategoryBox, StyledContainer, StyledTitle } from './SelectCategory.style';

const SelectCategory = () => {
  // 상위에서 category state 만들어서 props로 전달하는 방식으로 변경하기
  const [category, setCategory] = useState('');
  const categoryList = ['취미', '가족', '스터디', '운동', '회사', '동호회', '학교', '친목', '기타'];

  const handleClickCategory = (item) => {
    setCategory(item);
  };

  return (
    <>
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
    </>
  );
};

export default SelectCategory;
