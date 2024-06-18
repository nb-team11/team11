import React from 'react';
import {
  StyleButton,
  StyleCommentBox,
  StyleCommentContainer,
  StyleCommentContent,
  StyleCommentCreatedat,
  StyleCommentInputBox,
  StyleCommentLeft,
  StyleCommentList,
  StyleCommentRegisterBox,
  StyleCommentRight,
  StyleCommentWriter,
  StyleInput,
  StyleLabel
} from './PostComment.style';

const PostComment = () => {
  return (
    <>
      <StyleCommentContainer>
        <StyleCommentRegisterBox>
          <StyleCommentInputBox $width="200">
            <StyleLabel htmlFor="input-nickname">닉네임</StyleLabel>
            <StyleInput id="input-nickname" type="text" />
          </StyleCommentInputBox>
          <StyleCommentInputBox $width="200">
            <StyleLabel htmlFor="input-password">비밀번호</StyleLabel>
            <StyleInput id="input-password" type="password" />
          </StyleCommentInputBox>
          <StyleCommentInputBox $width="745">
            <StyleLabel htmlFor="input-comment">댓글</StyleLabel>
            <StyleInput id="input-comment" />
          </StyleCommentInputBox>
          <StyleButton $marginTop="20">보내기</StyleButton>
        </StyleCommentRegisterBox>
        <StyleCommentList>
          <StyleCommentBox>
            <StyleCommentLeft>
              <div>
                <StyleCommentWriter>oneieo</StyleCommentWriter>
                <StyleCommentCreatedat>작성시간</StyleCommentCreatedat>
              </div>
              <StyleCommentContent>저요 꼭 저요 저 아니면 안 돼요</StyleCommentContent>
            </StyleCommentLeft>
            <StyleCommentRight>
              <StyleButton>수정</StyleButton>
              <StyleButton>삭제</StyleButton>
            </StyleCommentRight>
          </StyleCommentBox>
        </StyleCommentList>
      </StyleCommentContainer>
    </>
  );
};

export default PostComment;
