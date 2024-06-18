import React, { useState } from 'react';
import styled from 'styled-components';
import { StyleFormConatiner, StyleInput } from './StyledUpload.styled';

// 스타일 객체 정의
const styles = {
  // formContainer: {
  //   height: '400px',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   padding: '20px',
  //   backgroundColor: '#f0f0f0',
  //   border: '1px solid #ddd',
  //   borderRadius: '15px',
  //   maxWidth: '1500px',
  //   margin: 'auto'
  //},
  // 입력 필드
  //input: {
  // padding: '15px 10px',
  // margin: '10px 0',
  // border: '1px solid #ccc',
  // borderRadius: '10px'
  // },
  // 버튼기본 설정
  // button: {
  //   padding: '15px 20px',
  //   margin: '10px 10px',
  //   border: 'none',
  //   borderRadius: '4px',
  //   cursor: 'pointer'
  // },
  // //취소버튼
  // cancelButton: {
  //   backgroundColor: '#495057',
  //   color: 'white',
  //   width: '110px',
  //   marginRight: '20px' // 버튼 사이의 간격을 조정하기 위해 marginRight 추가
  // },
  // // 완료버튼
  // doneButton: {
  //   backgroundColor: '#495057',
  //   color: 'white',
  //   width: '110px'
  // },
  // largeInput: {
  //   // 제목 입력 필드에 더 큰 비율을 부여
  //   flex: '2' // 기존 input의 2배 크기
  // },
  // label: {
  //   margin: '0 10px 0 0'
  // },
  // inputRow: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   marginBottom: '10px'
  // }
};

// UploadPost 컴포넌트 정의
const UploadPost = () => {
  const [title, setTitle] = useState('');
  const [nickname, setNickname] = useState('');
  const [passwords, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [time, setTime] = useState('');
  const [participants, setParticipants] = useState('');
  const [coverImage, setCoverImage] = useState('');

  const handleClick = () => {
    // 클릭했을때 타이틀 ... 객체로 만들기
    console.log({ title });
  };
  return (
    <StyleFormConatiner>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <label style={styles.label}>제목</label>
          <StyleInput
            type="text"
            // style={styles.input}
            placeholder="제목 입력"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
            <label style={styles.label}>닉네임</label>
            <StyleInput
              type="text"
              // style={styles.input}
              placeholder="닉네임 입력"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
            <label style={styles.label}>비밀번호</label>
            <StyleInput
              type="password"
              placeholder="비밀번호 입력"
              value={passwords}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <label style={styles.label}>내용</label>
      <StyleInput
        placeholder="함께하고 싶은 모임의 활동을 자세히 소개해 주세요. (30자 이상)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={styles.label}>시간</label>
          <StyleInput type="text" placeholder="시간" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>

        <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
          <label style={styles.label}>인원</label>
          <StyleInput
            type="text"
            placeholder="인원"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
          <label style={styles.label}>커버 이미지</label>
          <StyleInput
            type="text"
            placeholder="파일 선택"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
          />
        </div>

        <div style={{ marginLeft: 'auto', marginTop: 'auto' }}>
          <button style={{ ...styles.button, ...styles.cancelButton }}>취소</button>
          <button onClick={handleClick} style={{ ...styles.button, ...styles.doneButton }}>
            완료
          </button>
        </div>
      </div>

      {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        
      </div> */}
    </StyleFormConatiner>
  );
};

export default UploadPost;
