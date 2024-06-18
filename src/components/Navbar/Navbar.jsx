import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledInputDiv, StyledNavBarDiv, StyledTitle, StyledLogoDiv } from './StyledNavbar';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledNavBarDiv>
        <StyledTitle>TownTalk</StyledTitle>

        <StyledInputDiv>
          <label htmlFor="searchTitle">Search</label>
          <input type="text" id="searchTitle" />
        </StyledInputDiv>

        <StyledButton onClick={() => navigate('/')}>Home</StyledButton>
      </StyledNavBarDiv>

      <StyledLogoDiv></StyledLogoDiv>
    </>
  );
};

export default Navbar;
