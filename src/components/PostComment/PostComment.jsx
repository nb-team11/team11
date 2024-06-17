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
          <StyleCommentInputBox>
            <StyleLabel>닉네임</StyleLabel>
            <StyleInput />
          </StyleCommentInputBox>
          <StyleCommentInputBox>
            <StyleLabel>비밀번호</StyleLabel>
            <StyleInput />
          </StyleCommentInputBox>
          <StyleCommentInputBox>
            <StyleLabel>댓글</StyleLabel>
            <StyleInput />
          </StyleCommentInputBox>
          <StyleButton>보내기</StyleButton>
        </StyleCommentRegisterBox>
        <StyleCommentList>
          <StyleCommentBox>
            <StyleCommentLeft>
              <StyleCommentWriter>닉네임</StyleCommentWriter>
              <StyleCommentContent>댓글내용</StyleCommentContent>
              <StyleCommentCreatedat>작성시간</StyleCommentCreatedat>
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
