import styled from 'styled-components';

export const StyleCommentContainer = styled.div`
  width: 1400px;
  //height: 500px;
  margin: 25px auto;
`;

export const StyleCommentRegisterBox = styled.form`
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

export const StyleCommentInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(prop) => `${prop.$width}px`};
`;

export const StyleLabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  text-indent: 10px;
`;

export const StyleInput = styled.input`
  border: none;
  background-color: #dfdfdf;
  height: 30px;
  border-radius: 20px;
`;
export const StyleButton = styled.button`
  width: 100px;
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

export const StyleCommentList = styled.ul`
  width: 1400px;
  height: 500px;
  margin-top: 20px;
`;

export const StyleCommentBox = styled.li`
  width: 1400px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e3e3e3;
`;

export const StyleCommentLeft = styled.div`
  display: flex;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

export const StyleCommentRight = styled.div`
  display: flex;
  margin-right: 30px;
  gap: 20px;
`;

export const StyleCommentWriter = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const StyleCommentCreatedat = styled.p`
  font-size: 15px;
  text-indent: 10px;
  color: grey;
  //font-weight: bold;
`;

export const StyleCommentContent = styled.p`
  font-size: 18px;
  //font-weight: bold;
  text-indent: 20px;
`;
