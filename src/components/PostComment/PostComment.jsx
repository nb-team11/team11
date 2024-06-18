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
import { useQuery } from '@tanstack/react-query';
import { getComments } from '../../../supabase/comment.api';

const PostComment = () => {
  const { data: commentsData, isPending, isError } = useQuery({ queryKey: ['comments'], queryFn: getComments });

  if (isPending) {
    return <h1>로딩중입니다 ~</h1>;
  }
  if (isError) {
    return <h1>댓글 데이터 조회 중 오류 발생 ~</h1>;
  }

  const comments = commentsData;
  console.log(comments);

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
          {comments.map((comment) => {
            return (
              <StyleCommentBox key={comment.id}>
                <StyleCommentLeft>
                  <StyleCommentWriter>{comment.user_id}</StyleCommentWriter>

                  <StyleCommentContent>{comment.content}</StyleCommentContent>
                </StyleCommentLeft>
                <StyleCommentRight>
                  <StyleCommentCreatedat>{comment.created_at.slice(0, 10)}</StyleCommentCreatedat>
                  <StyleButton>수정</StyleButton>
                  <StyleButton>삭제</StyleButton>
                </StyleCommentRight>
              </StyleCommentBox>
            );
          })}
        </StyleCommentList>
      </StyleCommentContainer>
    </>
  );
};

export default PostComment;
