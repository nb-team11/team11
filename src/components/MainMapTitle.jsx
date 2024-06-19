import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSearchLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1500px;
  height: 95px;
  border-radius: 15px;
  background-color: #d9d9d9;
  margin-top: 25px;
  padding: 0 20px;
`;

const StyledSearchIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

const StyledSearchTitle = styled.h2`
  font-size: 22px;
  margin-left: 10px;
  margin-top: 5px;
`;

function MainMapTitle() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(setUserLat(position.coords.latitude));
          dispatch(setUserLng(position.coords.longitude));
        },
        (error) => {
          console.error('Error occurred. Error code: ' + error.code);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000
        }
      );
    }
  }, [dispatch]);

  return (
    <StyledSearchContainer>
      <StyledSearchLocation>
        <StyledSearchIcon src="./free-icon-location-3865991.png" alt="위치아이콘" />
        <StyledSearchTitle>OO시 소모임이 궁금하다면?</StyledSearchTitle>
      </StyledSearchLocation>
    </StyledSearchContainer>
  );
}

export default MainMapTitle;
