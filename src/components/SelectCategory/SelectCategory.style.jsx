import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 630px;
  height: 685px;
  gap: 20px;
  //background-color: #449443;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  width: 630px;
  height: 85px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCategoryBox = styled.div`
  width: 520px;
  height: 520px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  //background-color: #ffffff;
  gap: 20px;
`;

export const StyledCategory = styled.button`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.$bgc};
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background-color: #ffd532;
    transition: 0.3s;
    cursor: pointer;
  }
`;
