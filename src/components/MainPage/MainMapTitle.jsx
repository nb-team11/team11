import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledSearchContainer, StyledSearchIcon, StyledSearchLocation, StyledSearchTitle } from './Styled111';
import { setUserPlace } from '../redux/mainTitleSlice';
import { setUserLat, setUserLng } from '../redux/mapApiSlice';

function MainMapTitle() {
  const dispatch = useDispatch();
  const user_lat = useSelector((state) => state.titleSlice.user_lat);
  const user_lng = useSelector((state) => state.titleSlice.user_lng);
  const distanceFromMe = useSelector((state) => state.titleSlice.distanceFromMe);
  const my_place = useSelector((state) => state.titleSlice.my_place);

  const convertCoordinatesToAddress = (lat, lng, callback) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(lat, lng);

    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const roadAddress = result[0].road_address ? result[0].road_address.address_name : '';
        const bunjiAddress = result[0].address.address_name;
        callback(roadAddress, bunjiAddress);
      } else {
        console.error('Failed to convert coordinates to address');
      }
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setUserLat(latitude));
          dispatch(setUserLng(longitude));

          convertCoordinatesToAddress(latitude, longitude, (roadAddress, bunjiAddress) => {
            const fullAddress = roadAddress || bunjiAddress;
            dispatch(setUserPlace(fullAddress));
          });
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
        <StyledSearchTitle>"{my_place.slice(0, my_place.indexOf('구') + 1)}"의 소모임이 궁금하다면?</StyledSearchTitle>
      </StyledSearchLocation>
    </StyledSearchContainer>
  );
}

export default MainMapTitle;
