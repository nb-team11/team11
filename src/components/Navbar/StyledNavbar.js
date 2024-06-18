import styled from 'styled-components';

export const StyledNavBarDiv = styled.div`
  display: flex;
  width: auto;
  height: 80px;
  background-color: #ffd53e;
  align-items: center;
`;

export const StyledTitle = styled.span`
  width: auto;
  height: auto;
  margin-left: 80px;

  font-family: 'Bangers', system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 80px;
`;

export const StyledInputDiv = styled.div`
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

  input {
    margin-left: 10px;
    width: 70%;
    height: 40%;
  }
`;

export const StyledButton = styled.button`
  width: auto;
  height: auto;
  font-size: 20px;
  margin-right: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledLogoDiv = styled.div`
  background-image: url('../logobar.png') !important;
  background-repeat: no-repeat;
  height: 450px;
`;
