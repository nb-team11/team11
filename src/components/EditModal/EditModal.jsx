import React, { useEffect, useRef } from 'react';
import {
  StyleBackGround,
  StyleButton,
  StyleButtonBox,
  StyleContainer,
  StyleEditTitle,
  StyleInput,
  StyleInputBox,
  StyleLabel
} from './EditModal.style';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { editComment, getComment } from '../../../supabase/comment.api';

const EditModal = ({ setEditModalOpen, commentId }) => {
  const refPassword = useRef(null);
  const refComment = useRef(null);
  const queryClient = useQueryClient();
  const { mutate: editCommentMutate } = useMutation({
    mutationFn: editComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    }
  });

  const {
    data: comment,
    isPending,
    isError
  } = useQuery({ queryKey: ['comment'], queryFn: () => getComment(commentId) });

  if (isPending) return <h1>로딩중입니다.</h1>;
  if (isError) return <h1>수정할 댓글 데이터 조회 중 오류가 발생했습니다.</h1>;

  const handleCancelBtn = () => {
    setEditModalOpen(false);
  };

  const matchedComment = comment.find((data) => data.id === commentId);
  console.log(matchedComment);

  const handleConfirmBtn = () => {
    const editedComment = {
      ...matchedComment,
      content: refComment.current.value
    };
    if (matchedComment.user_pw !== refPassword.current.value) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    editCommentMutate(editedComment);
    setEditModalOpen(false);
  };

  return (
    <>
      <StyleBackGround>
        <StyleContainer>
          <StyleEditTitle>댓글 수정하기</StyleEditTitle>
          <StyleInputBox>
            <StyleLabel>비밀번호</StyleLabel>
            <StyleInput placeholder="비밀번호를 입력하세요." ref={refPassword} />
          </StyleInputBox>
          <StyleInputBox>
            <StyleLabel>댓글</StyleLabel>
            <StyleInput
              placeholder="수정할 내용을 입력하세요."
              ref={refComment}
              defaultValue={matchedComment.content}
            />
          </StyleInputBox>
          <StyleButtonBox>
            <StyleButton $bgColor="#b1b1b1" $bgcHover="#898989" onClick={handleCancelBtn}>
              취소
            </StyleButton>
            <StyleButton $bgColor="#ffd532" $bgcHover="#dcb51b" onClick={handleConfirmBtn}>
              확인
            </StyleButton>
          </StyleButtonBox>
        </StyleContainer>
      </StyleBackGround>
    </>
  );
};

export default EditModal;
