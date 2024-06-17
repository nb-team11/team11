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
  StyleContentText,
  StyleGroupInfo,
  StyleGroupInfoHead,
  StyleGroupInfoDate
} from './PostDetail.style';

const PostDetail = () => {
  return (
    <>
      <StyledPostContainer>
        <StyledTitleBox>
          <StyledPostNickname>닉네임</StyledPostNickname>
          <StyledPostTitle>이따 8시에 공원에서 배드민턴 치실분!!</StyledPostTitle>
          <StyledPostCreatedAt>2024-06-15</StyledPostCreatedAt>
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
            <StyleGroupInfo>소모임 정보</StyleGroupInfo>
            <StyleGroupInfoHead>10명</StyleGroupInfoHead>
            <StyleGroupInfoDate>2024년 6월 17일</StyleGroupInfoDate>
          </StyledContentTop>
          <StyleContentText>
            6월 17일에 축구하실분 구합니다!~ 한 게임 할 생각이구용 10명 이상 모집중입니다. 댓글남겨주세요!! 추가
            문의사항은 댓글이나 오픈카톡: open.~~~.kakao 여기로 연락주세요!
          </StyleContentText>
        </StyledPostContentBox>
      </StyledPostContainer>
    </>
  );
};

export default PostDetail;
