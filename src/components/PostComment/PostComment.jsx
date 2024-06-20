import React, { useRef, useState, useEffect } from 'react';
import {
  StyledButton,
  StyledCommentBox,
  StyledCommentContainer,
  StyledCommentContent,
  StyledCommentCreatedat,
  StyledCommentInputBox,
  StyledCommentLeft,
  StyledCommentList,
  StyledCommentRegisterBox,
  StyledCommentRight,
  StyledCommentWriter,
  StyledInput,
  StyledLabel,
  StyledNotice
} from './PostComment.style';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getComments } from '../../../supabase/comment.api';
import { uploadComment } from '../../../supabase/comment.api';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useParams } from 'react-router-dom';
import EditModal from '../EditModal/EditModal';
import { checkLength } from './commentValidation';

const PostComment = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');
  const noticeRef1 = useRef();
  const noticeRef2 = useRef();
  const noticeRef3 = useRef();
  const [commentId, setCommentId] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const { mutate: uploadCommentMutate } = useMutation({
    mutationFn: uploadComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    }
  });
  const { data: comments, isPending, isError } = useQuery({ queryKey: ['comments'], queryFn: () => getComments(id) });

  useEffect(() => {
    if (comments) {
      noticeRef1.current.style.display = 'none';
      noticeRef2.current.style.display = 'none';
      noticeRef3.current.style.display = 'none';
    }
  }, [comments]);

  if (isPending) return <h1>로딩중입니다 ~</h1>;
  if (isError) return <h1>댓글 데이터 조회 중 오류 발생 ~</h1>;

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const newComment = {
      user_id: nickname,
      user_pw: password,
      content: comment,
      post_id: id
    };

    if (!checkLength(nickname, 4, 8)) {
      noticeRef1.current.style.display = 'block';
      return;
    }
    if (!checkLength(password, 4, 15)) {
      noticeRef2.current.style.display = 'block';
      return;
    }
    if (!checkLength(comment, 1, 100)) {
      noticeRef3.current.style.display = 'block';
      return;
    }

    uploadCommentMutate(newComment);
    setNickname('');
    setPassword('');
    setComment('');
  };

  const handleModiBtn = (commentId) => {
    setEditModalOpen(true);
    setCommentId(commentId);
  };

  const handleDelBtn = (commentId) => {
    setDeleteModalOpen(true);
    setCommentId(commentId);
  };

  return (
    <>
      <StyledCommentContainer>
        <StyledCommentRegisterBox onSubmit={handleSubmitComment}>
          <StyledCommentInputBox $width="200">
            <StyledLabel htmlFor="input-nickname">닉네임</StyledLabel>
            <StyledInput
              id="input-nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <StyledNotice ref={noticeRef1}>4자 ~ 8자로 입력해주세요.</StyledNotice>
          </StyledCommentInputBox>
          <StyledCommentInputBox $width="200">
            <StyledLabel htmlFor="input-password">비밀번호</StyledLabel>
            <StyledInput
              id="input-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledNotice ref={noticeRef2}>4자 ~ 15자로 입력해주세요.</StyledNotice>
          </StyledCommentInputBox>
          <StyledCommentInputBox $width="745">
            <StyledLabel htmlFor="input-comment">댓글</StyledLabel>
            <StyledInput id="input-comment" type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <StyledNotice ref={noticeRef3}>댓글을 입력해주세요.(100자 이내)</StyledNotice>
          </StyledCommentInputBox>
          <StyledButton $marginTop="20" $width="100" $bgc="#605045" $bgcHover="#413228">
            보내기
          </StyledButton>
        </StyledCommentRegisterBox>
        <StyledCommentList>
          {comments.map((comment) => {
            return (
              <StyledCommentBox key={comment.id}>
                <StyledCommentLeft>
                  <div>
                    <StyledCommentWriter>{comment.user_id}</StyledCommentWriter>
                    <StyledCommentCreatedat>{comment.created_at.slice(0, 10)}</StyledCommentCreatedat>
                  </div>
                  <StyledCommentContent>{comment.content}</StyledCommentContent>
                </StyledCommentLeft>
                <StyledCommentRight>
                  <StyledButton
                    $width="60"
                    $bgc="#9b9b9b"
                    $bgcHover="#898989"
                    onClick={() => handleModiBtn(comment.id)}
                  >
                    수정
                  </StyledButton>
                  <StyledButton $width="60" $bgc="#9b9b9b" $bgcHover="#898989" onClick={() => handleDelBtn(comment.id)}>
                    삭제
                  </StyledButton>
                </StyledCommentRight>
              </StyledCommentBox>
            );
          })}
        </StyledCommentList>
        {editModalOpen && <EditModal setEditModalOpen={setEditModalOpen} commentId={commentId} />}
        {deleteModalOpen && <DeleteModal setDeleteModalOpen={setDeleteModalOpen} commentId={commentId} />}
      </StyledCommentContainer>
    </>
  );
};

export default PostComment;
