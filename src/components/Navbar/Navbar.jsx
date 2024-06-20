import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { StyledButton, StyledInputDiv, StyledLogoDiv, StyledNavBarDiv, StyledTitle } from './StyledNavbar';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../../supabase/post.api';
import { useDispatch, useSelector } from 'react-redux';
import { setKeyword, uploadPostsData } from '../../redux/slice/postsSlice';

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.postsSlice.keyword);
  const postsData = useSelector((state) => state.postsSlice.postsData);
  console.log('1 =>', postsData);

  const { data: posts, isPending, isError } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  if (isPending) return <>로딩중입니다~</>;
  if (isError) return <>게시물 데이터 조회 중 오류가 발생했습니다!</>;

  const handleSubmitKeyword = (e) => {
    e.preventDefault();
    const filteredPosts = posts.filter((post) => post.category === keyword);
    dispatch(uploadPostsData(filteredPosts));
    dispatch(setKeyword(''));
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
            onChange={(e) => dispatch(setKeyword(e.target.value))}
          />
        </StyledInputDiv>
        <StyledButton onClick={() => navigate('/upload')}>Post</StyledButton>
        <StyledButton onClick={() => navigate('/')}>Home</StyledButton>
      </StyledNavBarDiv>
    </>
  );
};

export default Navbar;
