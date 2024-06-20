import React, { useState } from 'react';
import styled from 'styled-components';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import {
  StyleFormConatiner,
  StyleInput,
  CancelButton,
  DoneButton,
  LargeInput,
  StyledLabel,
  InputRow
} from './StyledUpload.js';
import { supabase } from '../../../supabase/supabase.js'; // supabase 사용하려면
import SelectCategory from './../SelectCategory/SelectCategory';
// 스타일 객체 정의
const styles = {};
// UploadPost 컴포넌트 정의
const UploadPost = () => {
  const [title, setTitle] = useState('');
  const [nickname, setNickname] = useState('');
  const [passwords, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [time, setTime] = useState('');
  const [participants, setParticipants] = useState('');
  const [coverImage, setCoverImage] = useState('');

  // navigate 함수 초기화
  const navigate = useNavigate();

  const handleClickConfirm = () => {
    // 클릭했을때 타이틀 ... 객체로 만들기
    console.log('DoneButton');
    console.log('제목', title);
    console.log('닉네임', nickname);
    console.log('비밀번호', passwords);
    console.log('내용', content);
    console.log('시간', time);
    console.log('인원', participants);
    console.log('이미지', coverImage);
    // 1. writePost를 실행한다 ?
    // 2. 서버로 어떤 값을 보내줘야 할까?
    // 3.

    //
    const newObject = {
      time: time,
      title: title,
      head_count: participants,
      body: content,
      image: null, // todo:image
      user_id: nickname,
      user_pw: passwords
    };
    console.log(newObject);
    writePost(newObject);
  };

  // const testFunction = (data) => {
  //   console.log(data)
  // }

  // const myText = '안녕하세요'
  // testFunction(myText)
  const writePost = async (newObject) => {
    // 언제 실행 되어야 하는지 => 저장 버튼을 눌렀을 때
    // posts 테이블에 등록
    try {
      const { data, error } = await supabase
        .from('posts_test') // supabase에 있는 테이블 이름
        .insert(newObject);
      if (error) {
        throw error;
      } else {
        // 여기다가 작성 완료 되면 무엇을 해줄지
        // 1.  토스트창 띄우기
        // 2. 메인페이지로 이동
        // 성공 메시지 토스트
        toast.success('글 작성이 완료되었습니다!', {
          onClose: () => navigate('/'), // 메인 페이지로 이동
          autoClose: 1000,
          hideProgressBar: true
        });
      }
    } catch (e) {
      throw e;
    }
  };

  const handleClickCancel = () => {
    console.log('취소버튼 눌림');
  };

  return (
    <StyleFormConatiner>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <StyledLabel htmlFor="title">제목</StyledLabel>
          <StyleInput
            type="text"
            placeholder="제목 입력"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            width="800px" // 너비를 800px로 설정
            height="70px" // 높이를 70px로 설정
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
            <label style={styles.label}>닉네임</label>
            <StyleInput
              type="text"
              placeholder="닉네임 입력"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              width="230px" // 너비를 800px로 설정
              height="70px" // 높이를 70px로 설정
            />
          </div>
          <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
            <label style={styles.label}>비밀번호</label>
            <StyleInput
              type="password"
              placeholder="비밀번호 입력"
              value={passwords}
              onChange={(e) => setPassword(e.target.value)}
              width="230px" // 너비를 800px로 설정
              height="70px" // 높이를 70px로 설정
            />
          </div>
        </div>
      </div>
      <label style={styles.label}>내용</label>
      <StyleInput
        placeholder="함께하고 싶은 모임의 활동을 자세히 소개해 주세요. (30자 이상)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        width="1300px" // 너비를 800px로 설정
        height="150px" // 높이를 70px로 설정
      />
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* <label style={styles.label}>시간</label> */}
          <StyledLabel htmlFor="time">시간</StyledLabel>
          <StyleInput
            type="date"
            placeholder="시간"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            width="250px" // 너비를 800px로 설정
            height="70px" // 높이를 70px로 설정
          />
        </div>
        <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
          {/* <label style={styles.label}>인원</label> */}
          <StyledLabel htmlFor="participants">인원</StyledLabel>
          <StyleInput
            type="text"
            placeholder="인원"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            width="250px"
            height="70px"
          />
        </div>
        <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
          <label style={styles.label}>커버 이미지</label>
          <StyleInput
            type="file"
            placeholder="파일 선택"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            width="250px"
            height="70px"
          />
        </div>
        <div style={{ marginLeft: 'auto', marginTop: 'auto' }}>
          <CancelButton onClick={handleClickCancel}>취소</CancelButton>
          <DoneButton onClick={handleClickConfirm}>완료</DoneButton>
        </div>
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      </div> */}
      <SelectCategory />
    </StyleFormConatiner>
  );
};

export default UploadPost;
