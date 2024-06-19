import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPost } from '../../../supabase/post.api';

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

const StyledSubContent = styled.p`
  font-size: 15px;
  color: #999;
  margin-top: 15px;
  margin-left: 2px;
`;

function MainMaps() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPost(1);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  });

  return (
    <StyledMainMapsContainer>
      {posts.map((post) => (
        <StyledMapsBox key={post.id}>
          <StyledMapPhoto />
          <StyledSubHeading>{post.title}</StyledSubHeading>
          <StyledSubContent>{post.body}</StyledSubContent>
        </StyledMapsBox>
      ))}
    </StyledMainMapsContainer>
  );
}

export default MainMaps;
