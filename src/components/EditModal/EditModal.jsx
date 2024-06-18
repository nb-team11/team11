import React from 'react';
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
import { useQuery } from '@tanstack/react-query';
import { getComment } from '../../../supabase/comment.api';

const EditModal = ({ setEditModalOpen, commentId }) => {
  const {
    data: matchedComment,
    isPending,
    isError
  } = useQuery({ queryKey: ['matchedComment'], queryFn: () => getComment(commentId) });

  return (
    <>
      <StyleBackGround>
        <StyleContainer>
          <StyleEditTitle>댓글 수정하기</StyleEditTitle>
          <StyleInputBox>
            <StyleLabel>비밀번호</StyleLabel>
            <StyleInput placeholder="비밀번호를 입력하세요." />
          </StyleInputBox>
          <StyleInputBox>
            <StyleLabel>댓글</StyleLabel>
            <StyleInput placeholder="수정할 내용을 입력하세요." />
          </StyleInputBox>
          <StyleButtonBox>
            <StyleButton $bgColor="#b1b1b1" $bgcHover="#898989">
              취소
            </StyleButton>
            <StyleButton $bgColor="#ffd532" $bgcHover="#dcb51b">
              확인
            </StyleButton>
          </StyleButtonBox>
        </StyleContainer>
      </StyleBackGround>
    </>
  );
};

export default EditModal;
