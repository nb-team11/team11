import React, { useState } from 'react';
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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getComments } from '../../../supabase/comment.api';
import { uploadComment } from '../../../supabase/comment.api';

const PostComment = () => {
  const queryClient = useQueryClient();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');
  const { mutate: uploadCommentMutate } = useMutation({
    mutationFn: uploadComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    }
  });
  const { data: comments, isPending, isError } = useQuery({ queryKey: ['comments'], queryFn: getComments });
  if (isPending) return <h1>로딩중입니다 ~</h1>;
  if (isError) return <h1>댓글 데이터 조회 중 오류 발생 ~</h1>;

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const newComment = {
      user_id: nickname,
      user_pw: password,
      content: comment
    };

    // 유효성 검사 추가
    uploadCommentMutate(newComment);
  };

  return (
    <>
      <StyleCommentContainer>
        <StyleCommentRegisterBox onSubmit={handleSubmitComment}>
          <StyleCommentInputBox $width="200">
            <StyleLabel htmlFor="input-nickname">닉네임</StyleLabel>
            <StyleInput
              id="input-nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </StyleCommentInputBox>
          <StyleCommentInputBox $width="200">
            <StyleLabel htmlFor="input-password">비밀번호</StyleLabel>
            <StyleInput
              id="input-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </StyleCommentInputBox>
          <StyleCommentInputBox $width="745">
            <StyleLabel htmlFor="input-comment">댓글</StyleLabel>
            <StyleInput id="input-comment" type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
          </StyleCommentInputBox>
          <StyleButton $marginTop="20" $width="100">
            보내기
          </StyleButton>
        </StyleCommentRegisterBox>
        <StyleCommentList>
          {comments.map((comment) => {
            return (
              <StyleCommentBox key={comment.id}>
                <StyleCommentLeft>
                  <div>
                    <StyleCommentWriter>{comment.user_id}</StyleCommentWriter>
                    <StyleCommentCreatedat>{comment.created_at.slice(0, 10)}</StyleCommentCreatedat>
                  </div>

                  <StyleCommentContent>{comment.content}</StyleCommentContent>
                </StyleCommentLeft>
                <StyleCommentRight>
                  <StyleButton $width="60">수정</StyleButton>
                  <StyleButton $width="60">삭제</StyleButton>
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
