import styled from 'styled-components';

export const StyledNavBarDiv = styled.div`
  display: flex;
  width: auto;
  height: 70px;
  background-color: #ffd53e;
  align-items: center;
`;

// export const StyledTitle = styled.span`
//   width: auto;
//   height: auto;
//   margin-left: 80px;
//   font-family: 'Bangers', system-ui;
//   font-weight: 400;
//   font-style: normal;
//   font-size: 80px;
// `;

export const StyledTitle = styled.img`
  margin-left: 50px;
`;

export const StyledInputDiv = styled.form`
  width: 600px;
  height: 70px;
  font-size: 50px;
  margin-left: auto;
  display: flex;
  font-size: 30px;
  align-items: center;
  font-family: 'Bangers', system-ui;
  font-weight: 200;
  font-style: normal;
  font-size: 30px;

  img {
    position: absolute;
    margin-left: 140px;
  }

  input {
    margin-left: 130px;
    width: 70%;
    height: 40%;
    border: none;
    border-radius: 15px;
    text-indent: 40px;
    font-size: 15px;
    &:focus {
      outline: none;
    }
  }
`;

export const StyledButton = styled.button`
  width: auto;
  height: auto;
  font-size: 18px;
  margin-right: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledLogoDiv = styled.div`
  background-image: url('/public/towntalk_banner.png') !important;
  background-repeat: no-repeat;
  height: 450px;
  background-size: cover;
`;
