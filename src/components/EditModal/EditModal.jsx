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
import { useQuery } from '@tanstack/react-query';
import { getComment } from '../../../supabase/comment.api';

const EditModal = ({ setEditModalOpen, commentId }) => {
  const refPassword = useRef(null);
  const refComment = useRef(null);

  const {
    data: matchedComment,
    isPending,
    isError
  } = useQuery({ queryKey: ['matchedComment'], queryFn: () => getComment(commentId) });

  if (isPending) return <h1>로딩중입니다.</h1>;
  if (isError) return <h1>수정할 댓글 데이터 조회 중 오류가 발생했습니다.</h1>;

  const handleCancelBtn = () => {
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
              defaultValue={matchedComment[0].content}
            />
          </StyleInputBox>
          <StyleButtonBox>
            <StyleButton $bgColor="#b1b1b1" $bgcHover="#898989" onClick={handleCancelBtn}>
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
