import { useNavigate } from 'react-router-dom';
import React from 'react';
import { StyledButton, StyledInputDiv, StyledLogoDiv, StyledNavBarDiv, StyledTitle } from './StyledNavbar';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledNavBarDiv>
        <StyledTitle src="/public/towntalk_logo.png" />
        <StyledInputDiv>
          <label htmlFor="searchTitle"></label>
          <img src="/public/search.png" />
          <input type="text" id="searchTitle" placeholder="카테고리를 검색해보세요." />
        </StyledInputDiv>
        <StyledButton onClick={() => navigate('/')}>Home</StyledButton>
      </StyledNavBarDiv>
      <StyledLogoDiv></StyledLogoDiv>
    </>
  );
};

export default Navbar;
