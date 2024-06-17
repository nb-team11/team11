import React from 'react';
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
  StyleGroupInfoText,
  StyleContentText
} from './PostDetail.style';

const PostDetail = () => {
  return (
    <>
      <StyledPostContainer>
        <StyledTitleBox>
          <StyledPostNickname>닉네임</StyledPostNickname>
          <StyledPostTitle>이따 8시에 공원에서 배드민턴 치실분!!</StyledPostTitle>
          <StyledPostCreatedAt>글 작성시간</StyledPostCreatedAt>
        </StyledTitleBox>
        <StyledVisualInfo>
          <StyledPostImg src="/public/vite.svg" />
          <StyledLocationBox>
            <StyledLocationImg src="/public/vite.svg" />
            <StyledContentBox>
              <StyledLocationName>내배캠카페</StyledLocationName>
              <StyledLocation>충청북도 청주시 청주길 12345</StyledLocation>
            </StyledContentBox>
          </StyledLocationBox>
        </StyledVisualInfo>
        <StyledPostContentBox>
          <StyledContentTop>
            <StyleGroupInfoText>소모임 정보</StyleGroupInfoText>
            <StyleGroupInfoText>n명</StyleGroupInfoText>
            <StyleGroupInfoText>2024년 6월 17일</StyleGroupInfoText>
          </StyledContentTop>
          <StyleContentText>내용 내용 내용</StyleContentText>
        </StyledPostContentBox>
      </StyledPostContainer>
    </>
  );
};

export default PostDetail;
