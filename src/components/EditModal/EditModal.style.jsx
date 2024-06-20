import styled from 'styled-components';

export const StyleBackGround = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyleContainer = styled.div`
  width: 440px;
  height: 240px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
`;

export const StyleEditTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 10px;
`;

export const StyleInputBox = styled.p`
  width: 375px;
  height: 50px;
  margin-bottom: 15px;
`;

export const StyleLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 5px;
`;

export const StyleInput = styled.input`
  width: 375px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  background-color: #ededed;
  text-indent: 10px;
  font-size: 15px;
  font-family: 'Pretendard-Regular';
  &:focus {
    outline: none;
    background-color: #d6d6d6;
  }
`;

export const StyleButtonBox = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 6px;
`;

export const StyleButton = styled.div`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.$bgColor};
  &:hover {
    background-color: ${(prop) => prop.$bgcHover};
    transition: 0.3s;
    cursor: pointer;
  }
`;
