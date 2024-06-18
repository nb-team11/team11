import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledInputDiv, StyledNavBarDiv, StyledTitle } from './StyledNavbar';

export const Navbar = () => {
  return (
    <StyledNavBarDiv style={{ marginBottom: '50px' }}>
      <StyledTitle>TownTalk</StyledTitle>

      <StyledInputDiv>
        <label htmlFor="searchTitle">Search</label>
        <input type="text" id="searchTitle" />
      </StyledInputDiv>

      <StyledButton>Home</StyledButton>
    </StyledNavBarDiv>
  );
};

export default Navbar;
