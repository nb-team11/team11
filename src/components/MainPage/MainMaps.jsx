import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPosts } from '../../../supabase/post.api';
import { useNavigate } from 'react-router-dom';
import { StyledLogoDiv } from '../Navbar/StyledNavbar';
import MainMapTitle from './MainMapTitle';
import { useDispatch } from 'react-redux';
import { setUserLat, setUserLng } from '../../redux/mapApiSlice';

const StyledMainMapsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px auto;
  margin-top: 25px;
  width: 1500px;
  height: auto;
  flex-wrap: wrap;
`;

const StyledMapsBox = styled.div`
  width: 440px;
  height: 430px;
  border-radius: 15px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.5s;
  cursor: pointer;
  flex: 0 1 30%;
  margin: 24px;

  &:hover {
    box-shadow: 0px 1px 5px #b9b9b9;
    scale: 1.12;
  }
`;

const StyledMapPhoto = styled.img`
  width: 400px;
  height: 250px;
  background-color: #d9d9d9;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 15px;
`;

const StyledSubHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-top: 25px;
  margin-left: 20px;
  text-align: left;
`;

const StyledSubContent = styled.p`
  font-size: 15px;
  color: #999;
  margin-top: 15px;
  margin-left: 20px;
  text-align: left;
`;

const StyledInformation = styled.p`
  font-size: 14px;
  color: #323232;
  float: right;
  margin-top: 15px;
  margin-right: 20px;
`;

function MainMaps() {
  const [posts, setPosts] = useState([]);
  const [userLocation, setUserLocation] = useState({ latitude: null, longitude: null });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  return (
    <>
      <StyledLogoDiv></StyledLogoDiv>
      <MainMapTitle />

      <StyledMainMapsContainer>
        {posts
          .filter((post) => {
            if (userLocation.latitude && userLocation.longitude && post.map_lat && post.map_lng) {
              const distance = calculateDistance(
                userLocation.latitude,
                userLocation.longitude,
                post.map_lat,
                post.map_lng
              );
              return distance <= 20;
            }
            return false;
          })
          .map((post) => (
            <StyledMapsBox onClick={() => navigate(`/post-detail/${post.id}`)} key={post.id}>
              <StyledMapPhoto src={post.image} />
              <StyledSubHeading>{post.title}</StyledSubHeading>
              <StyledSubContent>{post.body}</StyledSubContent>
              <StyledInformation>
                {post.category} | {post.time}
              </StyledInformation>
            </StyledMapsBox>
          ))}
      </StyledMainMapsContainer>
    </>
  );
}
// 각 사용자마다 거리를 mainpage에서 계산해야 함
//-> distance를 미리 저장하면 작성자기준 거리가 저장됨(ex:서울작성자와 청주시청자랑 다름)

// 각 post는 lat과 lng값을 가지고있음 -> 본인의 현재위치(title)과 비교해서 distance거리를 재계산

// mapApi에 거리계산 알고리즘이 있음 -> useEffect로 post데이터(title,body....lat,lng)를 불러온뒤,
// Maintitle의 위치와 post의lat,lng로 filter

export default MainMaps;
