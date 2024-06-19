import styled from 'styled-components';

export const StyledCommentContainer = styled.div`
  width: 1400px;
  //height: 500px;
  margin: 25px auto;
  font-family: 'Pretendard-Regular';
`;

export const StyledCommentRegisterBox = styled.form`
  width: 1400px;
  height: 120px;
  border-top: 2px solid #cccccc;
  border-bottom: 2px solid #cccccc;
  //border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const StyledCommentInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(prop) => `${prop.$width}px`};
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  text-indent: 10px;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: #dfdfdf;
  height: 30px;
  border-radius: 20px;
  text-indent: 15px;
  font-size: 17px;
  &:focus {
    outline: none;
    background-color: #c4c4c4;
  }
`;

export const StyledNotice = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #ff7b00;
  text-indent: 7px;
  margin-top: 5px;
`;

export const StyledButton = styled.button`
  width: ${(prop) => `${prop.$width}px`};
  height: 40px;
  border: none;
  border-radius: 15px;
  margin-top: ${(prop) => `${prop.$marginTop}px`};
  font-size: 15px;
  font-weight: bold;
  color: white;
  background-color: #605045;
  &:hover {
    background-color: #413228;
    transition: 0.3s;
    cursor: pointer;
  }
`;

export const StyledCommentList = styled.ul`
  width: 1400px;
  height: 500px;
  margin-top: 25px;
`;

export const StyledCommentBox = styled.li`
  width: 1400px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ebebeb;
  margin-top: 10px;
`;

export const StyledCommentLeft = styled.div`
  display: flex;
  margin-left: 40px;
  display: flex;
  align-items: center;
`;

export const StyledCommentRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  gap: 10px;
`;

export const StyledCommentWriter = styled.p`
  width: 110px;
  font-size: 20px;
  font-weight: bold;
`;

export const StyledCommentCreatedat = styled.p`
  width: 100px;
  font-size: 15px;
  color: grey;
  margin-top: 5px;
`;

export const StyledCommentContent = styled.p`
  width: 1000px;
  height: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  //font-weight: bold;
  //text-indent: 20px;
`;
