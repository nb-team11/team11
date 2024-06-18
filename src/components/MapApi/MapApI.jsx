import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDistanceFromMe, setLat, setLng, setUserLat, setUserLng } from '../../redux/mapApiSlice';
import { StyledMapDiv } from './StyledMapApi';

const MapApI = () => {
  const dispatch = useDispatch();
  const lng = useSelector((state) => state.mapSlice.lng);
  const lat = useSelector((state) => state.mapSlice.lat);
  const user_lat = useSelector((state) => state.mapSlice.user_lat);
  const user_lng = useSelector((state) => state.mapSlice.user_lng);
  const distanceFromMe = useSelector((state) => state.mapSlice.distanceFromMe);

  //여기는 사용자의 위치(위도경도)를 알아내는 로직
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

  //여기서부터는 카카오맵, 마커 관련 코드에용
  useEffect(() => {
    if (user_lat && user_lng) {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(user_lat, user_lng),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);

      const markerPosition = new kakao.maps.LatLng(user_lat, user_lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);

      kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        const latlng = mouseEvent.latLng;
        marker.setPosition(latlng);

        dispatch(setLat(latlng.getLat()));
        dispatch(setLng(latlng.getLng()));

        //거리값 저장부분입니다.
        const distance = calculateDistance(user_lat, user_lng, latlng.getLat(), latlng.getLng());
        const roundedDistance = distance.toFixed(2);
        dispatch(setDistanceFromMe(roundedDistance));
      });
    }
  }, [user_lat, user_lng, dispatch]);

  //나와 마커(약속장소)사이 거리구하기 - 이부분은 구글링으로....수학이라 설명불가ㅠ
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degree) => (degree * Math.PI) / 180;
    const R = 6371; // 지구의 반지름 (킬로미터)
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // 킬로미터 단위 거리
  };

  //콘솔테스트(추후삭제)
  useEffect(() => {
    console.log('현재 위도:', lat);
    console.log('현재 경도:', lng);
    console.log('유저위치:', user_lat, user_lng);
    console.log('유저와 마커사이의 거리:', distanceFromMe);
  }, [lat, lng]);

  return (
    <>
      <StyledMapDiv id="map"></StyledMapDiv>
    </>
  );
};
export default MapApI;
