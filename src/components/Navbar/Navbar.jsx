import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { StyledButton, StyledInputDiv, StyledLogoDiv, StyledNavBarDiv, StyledTitle } from './StyledNavbar';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../../supabase/post.api';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPostsData } from '../../redux/slice/postsSlice';

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  const postsData = useSelector((state) => state.postsSlice.postsData);
  console.log('1 =>', postsData);

  const { data: posts, isPending, isError } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  if (isPending) return <>로딩중입니다~</>;
  if (isError) return <>게시물 데이터 조회 중 오류가 발생했습니다!</>;

  // 받아온 데이터 가공해서(키워드랑 일치하는 데이터만) 전역상태로 관리
  // main에 뿌려주기 <- 요거는 메인페이지에서 구현
  // ... 상태 길이가 0이면 서버에서 가져온 데이터로 뿌려주고 아니면 전역에서 데이터 가져와서 뿌리기

  const handleSubmitKeyword = (e) => {
    e.preventDefault();
    const filteredPosts = posts.filter((post) => post.category === keyword);
    dispatch(uploadPostsData(filteredPosts));
    setKeyword('');
  };
  console.log('2 =>', postsData);

  return (
    <>
      <StyledNavBarDiv>
        <StyledTitle src="/public/towntalk_logo.png" />
        <StyledInputDiv onSubmit={handleSubmitKeyword}>
          <label htmlFor="searchTitle"></label>
          <img src="/public/search.png" />
          <input
            type="text"
            id="searchTitle"
            placeholder="카테고리를 검색해보세요."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </StyledInputDiv>
        <StyledButton onClick={() => navigate('/upload')}>Post</StyledButton>
        <StyledButton onClick={() => navigate('/')}>Home</StyledButton>
      </StyledNavBarDiv>
    </>
  );
};

export default Navbar;
