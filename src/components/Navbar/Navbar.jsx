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
          <input type="text" id="searchTitle" />
        </StyledInputDiv>
        <StyledButton onClick={() => navigate('/')}>Home</StyledButton>
      </StyledNavBarDiv>
      <StyledLogoDiv></StyledLogoDiv>
    </>
  );
};

export default Navbar;
