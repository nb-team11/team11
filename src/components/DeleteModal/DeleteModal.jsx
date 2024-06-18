import React, { useState } from 'react';
import {
  StyleBackGround,
  StyleButton,
  StyleButtonBox,
  StyleContainer,
  StyleDeleteMent,
  StyleDeleteTitle,
  StyleInput
} from './DeleteModal.style';
import { useMutation, useQuery, useQueryClient, useQueryErrorResetBoundary } from '@tanstack/react-query';
import { deleteComment, getComment } from '../../../supabase/comment.api';

const DeleteModal = ({ setDeleteModalOpen, commentId }) => {
  const queryClient = useQueryClient();
  const [password, setPassword] = useState('');
  const { mutate: deleteCommentMutate } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    }
  });
  const {
    data: matchedComment,
    isPending,
    isError
  } = useQuery({ queryKey: ['matchedComment'], queryFn: () => getComment(commentId) });

  if (isPending) {
    return <h1>로딩중입니다. . .</h1>;
  }
  if (isError) {
    return <h1>삭제할 댓글 데이터 조회 중 오류가 발생했습니다.</h1>;
  }

  const handleBackBtn = () => {
    setDeleteModalOpen(false);
  };

  const handleCommentDelBtn = () => {
    if (matchedComment[0].user_pw !== password) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    deleteCommentMutate(commentId);
    setDeleteModalOpen(false);
  };

  return (
    <>
      <StyleBackGround>
        <StyleContainer>
          <StyleDeleteTitle>댓글을 삭제하시겠어요?</StyleDeleteTitle>
          <StyleDeleteMent>댓글은 영구적으로 삭제되며, 복원할 수 없습니다.</StyleDeleteMent>
          <StyleInput
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyleButtonBox>
            <StyleButton $bgColor="grey" onClick={handleBackBtn}>
              취소
            </StyleButton>
            <StyleButton $bgColor="skyblue" onClick={handleCommentDelBtn}>
              삭제
            </StyleButton>
          </StyleButtonBox>
        </StyleContainer>
      </StyleBackGround>
    </>
  );
};

export default DeleteModal;
