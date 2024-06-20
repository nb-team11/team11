import styled from 'styled-components';

// 스타일 객체 정의
export const StyleFormConatiner = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 15px;
  width: 1430px;
  margin: auto;
`;

// 입력 필드
export const StyleInput = styled.input`
  /* padding: 15px 10px; */
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  width: ${(props) => props.width || 'auto'}; // 너비를 props에서 받거나 기본값 auto 사용
  height: ${(props) => props.height || 'auto'}; // 높이를 props에서 받거나 기본값 auto 사용
`;

export const StyledImagelabel = styled.label`
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  width: ${(props) => props.width || 'auto'}; // 너비를 props에서 받거나 기본값 auto 사용
  height: ${(props) => props.height || 'auto'}; // 높이를 props에서 받거나 기본값 auto 사용
`;

// // 버튼기본 설정
// // export const StyleButton = styled.button`
// padding: 15px 20px;
// margin: 10px 10px;
// border: none;
// border-radius: 4px;
// cursor: pointer;
// // `;

//취소버튼
export const CancelButton = styled.button`
  background-color: #495057;
  color: white;
  width: 193px;
  padding: 15px 20px;
  margin: 10px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 71px; /* 따옴표 제거하고 세미콜론 추가 */
  margin-right: 20px; /* 버튼 사이의 간격을 조정하기 위해 marginRight 추가 */
`;

// 완료버튼
export const DoneButton = styled.button`
  background-color: #495057;
  color: white;
  width: 193px;
  padding: 15px 20px;
  margin: 10px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 71px; /* 따옴표 제거하고 세미콜론 추가 */
  margin-right: 20px; /* 버튼 사이의 간격을 조정하기 위해 marginRight 추가 */
`;

// largeInput 스타일 컴포넌트
export const LargeInput = styled.input`
  flex: 2; /* 기존 input의 2배 크기 */
`;

// label 스타일 컴포넌트
export const StyledLabel = styled.label`
  margin: 0 10px 0 0;
`;

// inputRow 스타일 컴포넌트
export const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
