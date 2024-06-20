import React, { useEffect } from 'react';
import {
  StyledPostContainer,
  StyledTitleBox,
  StyledPostNickname,
  StyledPostTitle,
  StyledPostCreatedAt,
  StyledVisualInfo,
  StyledPostImg,
  StyledLocationBox,
  StyledLocationImg,
  StyledLocationName,
  StyledLocation,
  StyledContentBox,
  StyledPostContentBox,
  StyledContentTop,
  StyleContentText,
  StyleGroupInfo,
  StyleGroupInfoHead,
  StyleGroupInfoDate,
  StyleGroupInfoCategory
} from './PostDetail.style';
import { useQuery } from '@tanstack/react-query';
import { getPost } from '../../../supabase/post.api';
import { useParams } from 'react-router-dom';
import MapApI from '../MapApi/MapApI';

const PostDetail = () => {
  const { id } = useParams();
  const { data: post, isPending, isError } = useQuery({ queryKey: ['post'], queryFn: () => getPost(id) });

  if (isPending) {
    return <h1>로딩중입니다~</h1>;
  }

  if (isError) {
    return <h1>데이터 조회 중 오류가 발생했습니다.</h1>;
  }

  const matchedPost = post[0];

  return (
    <>
      <StyledPostContainer>
        <StyledTitleBox>
          <StyledPostNickname>{matchedPost.user_id}</StyledPostNickname>
          <StyledPostTitle>{matchedPost.title}</StyledPostTitle>
          <StyledPostCreatedAt>{matchedPost.created_at.slice(0, 10)}</StyledPostCreatedAt>
        </StyledTitleBox>
        <StyledVisualInfo>
          <StyledPostImg src={matchedPost.image} />
          <StyledLocationBox>
            {/* <StyledLocationImg src="/public/vite.svg" /> */}
            <MapApI />
            <StyledContentBox>
              <StyledLocationName>내배캠카페</StyledLocationName>
              <StyledLocation>충청북도 청주시 청주길 12345</StyledLocation>
            </StyledContentBox>
          </StyledLocationBox>
        </StyledVisualInfo>
        <StyledPostContentBox>
          <StyledContentTop>
            <StyleGroupInfo>소모임 정보</StyleGroupInfo>
            <StyleGroupInfoCategory>{matchedPost.category}</StyleGroupInfoCategory>
            <StyleGroupInfoHead>{matchedPost.head_count}명</StyleGroupInfoHead>
            <StyleGroupInfoDate>{matchedPost.time}</StyleGroupInfoDate>
          </StyledContentTop>
          <StyleContentText>{matchedPost.body}</StyleContentText>
        </StyledPostContentBox>
      </StyledPostContainer>
    </>
  );
};

export default PostDetail;
