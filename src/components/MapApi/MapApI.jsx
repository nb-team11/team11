import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetValue, setDistanceFromMe, setLat, setLng, setUserLat, setUserLng } from '../../redux/mapApiSlice';
import { StyledMapDiv } from './StyledMapApi';
import { supabase } from '../../../supabase/supabase';
import { useQuery } from '@tanstack/react-query';

const MapApI = () => {
  const dispatch = useDispatch();
  const lng = useSelector((state) => state.mapSlice.lng);
  const lat = useSelector((state) => state.mapSlice.lat);
  const user_lat = useSelector((state) => state.mapSlice.user_lat);
  const user_lng = useSelector((state) => state.mapSlice.user_lng);
  const distanceFromMe = useSelector((state) => state.mapSlice.distanceFromMe);

  const { data } = useQuery({
    queryKey: ['mapApi_test'],
    queryFn: async () => {
      const { data } = await supabase.from('mapApi_test').select('lat,lng');
      return data;
    }
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const { lat, lng } = data[0]; // 첫 번째 항목의 lat, lng 값을 저장
      dispatch(setLat(lat));
      dispatch(setLng(lng));

      //이부분을 db의 포스트id와 비교하여 값을 넣어주는 방식사용해야합니다***************
    }
  }, [data]);

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
        center: new kakao.maps.LatLng(lat, lng),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);

      const markerPosition = new kakao.maps.LatLng(lat, lng);
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
        const distance = calculateDistance(user_lat, user_lng, lat, lng);
        const roundedDistance = distance.toFixed(2);
        dispatch(setDistanceFromMe(roundedDistance));
      });
    }
  }, [user_lat, user_lng, lat, lng, dispatch]);

  //나와 마커(약속장소)사이 거리구하기
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

  //db데이터 다루는부분(테스트 추후 uploadPost에서 다룰것)
  const handleGetLatLngFromDB = async () => {
    try {
      const { error } = await supabase.from('mapApi_test').insert([{ lat, lng }]);

      if (error) {
        throw error;
      } else {
        console.log('데이터가 성공적으로 삽입되었습니다.');
      }
    } catch (error) {
      console.error('오류 발생:', error.message);
    }
    dispatch(resetValue());
  };
  return (
    <>
      <StyledMapDiv id="map"></StyledMapDiv>

      <button onClick={handleGetLatLngFromDB}>테스트</button>
    </>
  );
};
export default MapApI;

// 상세보기에선 db의 map_lng,map_lat값을 불러오기.
// 글쓰기에서는 본인위치로 시작하게끔 찍기.
