import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetValue,
  setDistanceFromMe,
  setLat,
  setLng,
  setRoad,
  setBunji,
  setUserLat,
  setUserLng
} from '../../redux/mapApiSlice';
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
  const road = useSelector((state) => state.mapSlice.road);
  const bunji = useSelector((state) => state.mapSlice.bunji);

  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const infowindowRef = useRef(null);

  const { data } = useQuery({
    queryKey: ['mapApi_test'],
    queryFn: async () => {
      const { data } = await supabase.from('mapApi_test').select('lat,lng');
      return data;
    }
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const { lat, lng } = data[0];
      dispatch(setLat(lat));
      dispatch(setLng(lng));
    }
  }, [data, dispatch]);

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

  const convertCoordinatesToAddress = (lat, lng, callback) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(lat, lng);

    geocoder.coord2Address(coord.getLng(), coord.getLat(), function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const roadAddress = result[0].road_address ? result[0].road_address.address_name : '';
        const bunjiAddress = result[0].address.address_name;
        callback(roadAddress, bunjiAddress);
      } else {
        console.error('Failed to convert coordinates to address');
      }
    });
  };

  const initializeMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
    mapRef.current = map;

    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
    markerRef.current = marker;

    const infowindow = new kakao.maps.InfoWindow({
      zindex: 1
    });
    infowindowRef.current = infowindow;

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      const latlng = mouseEvent.latLng;
      marker.setPosition(latlng);

      dispatch(setLat(latlng.getLat()));
      dispatch(setLng(latlng.getLng()));

      const distance = calculateDistance(user_lat, user_lng, latlng.getLat(), latlng.getLng());
      const roundedDistance = distance.toFixed(2);
      dispatch(setDistanceFromMe(roundedDistance));

      convertCoordinatesToAddress(latlng.getLat(), latlng.getLng(), (roadAddress, bunjiAddress) => {
        const content = `<div class="bAddr">
                          <span class="title">주소정보</span>
                          <div>도로명주소 : ${roadAddress}</div>
                          <div>지번 주소 : ${bunjiAddress}</div>
                        </div>`;
        infowindow.setContent(content);
        infowindow.open(map, marker);

        dispatch(setRoad(roadAddress));
        dispatch(setBunji(bunjiAddress));
      });
    });
  };

  useEffect(() => {
    if (lat && lng && user_lat && user_lng) {
      if (!mapRef.current) {
        initializeMap();
      } else {
        const map = mapRef.current;
        const marker = markerRef.current;
        marker.setPosition(new kakao.maps.LatLng(lat, lng));
        map.setCenter(new kakao.maps.LatLng(lat, lng));
      }
    }
  }, [lat, lng, user_lat, user_lng]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degree) => (degree * Math.PI) / 180;
    const R = 6371;
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    console.log('데이터값:', data);
    console.log('현재 위도:', lat);
    console.log('현재 경도:', lng);
    console.log('유저위치:', user_lat, user_lng);
    console.log('유저와 마커사이의 거리:', distanceFromMe);
    console.log('도로명 주소:', road);
    console.log('지번 주소:', bunji);
  }, [lat, lng, road, bunji]);

  //DB부분 추후 작성시 변경하기(테이블명***************************************
  const handleGetLatLngFromDB = async () => {
    try {
      const { error } = await supabase.from('mapApi_test').insert([{ lat, lng, road, bunji }]);

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
  //DB부분 추후 작성시 변경하기***************************************

  return (
    <>
      <StyledMapDiv id="map"></StyledMapDiv>
      <button onClick={handleGetLatLngFromDB}>테스트</button>
      <div>
        <h3>주소 정보</h3>
        <p>도로명 주소: {road}</p>
        <p>지번 주소: {bunji}</p>
      </div>
    </>
  );
};

export default MapApI;
