import React from 'react';
import styled from 'styled-components';

const StyledMainMapsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 25px;
  width: 1500px;
`;

const StyledMapsBox = styled.div`
  width: 480px;
  height: 400px;
  margin: 1%;
  border-radius: 15px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  margin-top: 25px;
`;

const StyledMapPhoto = styled.div`
  width: 400px;
  height: 250px;
  background-color: #d9d9d9;
  margin: 0 auto;
  margin-top: 25px;
`;

const StyledSubHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-top: 25px;
  margin-left: 37px;
`;

function MainMaps() {
  return (
    <StyledMainMapsContainer>
      <StyledMapsBox>
        <StyledMapPhoto />
        <StyledSubHeading>내배캠 카페</StyledSubHeading>
      </StyledMapsBox>
      <StyledMapsBox>
        <StyledMapPhoto />
        <StyledSubHeading>내배캠 카페</StyledSubHeading>
      </StyledMapsBox>
      <StyledMapsBox>
        <StyledMapPhoto />
        <StyledSubHeading>내배캠 카페</StyledSubHeading>
      </StyledMapsBox>
    </StyledMainMapsContainer>
  );
}

export default MainMaps;
