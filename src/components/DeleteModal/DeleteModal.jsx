import React from 'react';
import {
  StyleBackGround,
  StyleButton,
  StyleButtonBox,
  StyleContainer,
  StyleDeleteMent,
  StyleDeleteTitle
} from './DeleteModal.style';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteComment } from '../../../supabase/comment.api';

const DeleteModal = ({ setDeleteModalOpen, commentId }) => {
  const queryClient = useQueryClient();

  const { mutate: deleteCommentMutate } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    }
  });

  const handleBackBtn = () => {
    setDeleteModalOpen(false);
  };

  const handleCommentDelBtn = () => {
    deleteCommentMutate(commentId); // 여기서 오류
    setDeleteModalOpen(false);
  };

  return (
    <>
      <StyleBackGround>
        <StyleContainer>
          <StyleDeleteTitle>댓글을 삭제하시겠어요?</StyleDeleteTitle>
          <StyleDeleteMent>댓글은 영구적으로 삭제되며, 복원할 수 없습니다.</StyleDeleteMent>
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
