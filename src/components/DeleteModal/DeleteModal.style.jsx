import styled from 'styled-components';

export const StyleBackGround = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyleContainer = styled.div`
  width: 400px;
  height: 220px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
`;

export const StyleDeleteTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const StyleDeleteMent = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #6f6f6f;
  margin-top: 25px;
`;

export const StyleInput = styled.input`
  width: 290px;
  height: 30px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  background-color: #ededed;
  text-indent: 10px;
  font-family: 'Pretendard-Regular';
  &:focus {
    outline: none;
    background-color: #d6d6d6;
  }
`;

export const StyleButtonBox = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 20px;
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
  margin-top: 10px;
  background-color: ${(prop) => prop.$bgColor};
  &:hover {
    background-color: ${(prop) => prop.$bgcHover};
    transition: 0.3s;
    cursor: pointer;
  }
`;
