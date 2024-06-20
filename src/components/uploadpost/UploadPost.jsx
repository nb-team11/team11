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
import { useDispatch, useSelector } from 'react-redux';

const UploadPost = () => {
  const [title, setTitle] = useState('');
  const [nickname, setNickname] = useState('');
  const [passwords, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [time, setTime] = useState('');
  const [participants, setParticipants] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const category = useSelector((state) => state.UploadPostSlice.category);
  const lng = useSelector((state) => state.mapSlice.lng);
  const lat = useSelector((state) => state.mapSlice.lat);

  const navigate = useNavigate();

  const handleClickConfirm = async () => {
    let imageUploadUrl = null;

    if (coverImage) {
      imageUploadUrl = await uploadImage(coverImage);
      console.log('Uploaded image URL:', imageUploadUrl);
    }

    const newObject = {
      time: time,
      title: title,
      head_count: participants,
      body: content,
      user_id: nickname,
      user_pw: passwords,
      category,
      map_lng: lng,
      map_lat: lat,
      image: imageUploadUrl // 이미지 URL을 설정합니다.
    };

    console.log(newObject);
    await writePost(newObject);
  };

  const uploadImage = async (file) => {
    const fileName = `${Date.now()}`;
    const filePath = `${fileName}`;

    try {
      const { data, error } = await supabase.storage.from('images').upload(filePath, file);

      if (error) {
        throw error;
      }

      const { data: urldata, error: publicURLError } = await supabase.storage.from('images').getPublicUrl(filePath);
      if (publicURLError) {
        throw publicURLError;
      }

      return urldata.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('이미지 업로드에 실패했습니다.');
      return null;
    }
  };

  const writePost = async (newObject) => {
    try {
      const { data, error } = await supabase.from('posts_test').insert(newObject);
      if (error) {
        throw error;
      } else {
        toast.success('글 작성이 완료되었습니다!', {
          onClose: () => navigate('/'),
          autoClose: 700,
          hideProgressBar: true
        });
      }
    } catch (e) {
      console.error('Error writing post:', e);
      toast.error('글 작성에 실패했습니다.');
    }
  };

  const handleClickCancel = () => {
    navigate(-1);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      console.log(imageUrl);
    }
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
            width="800px"
            height="70px"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
            <label>닉네임</label>
            <StyleInput
              type="text"
              placeholder="닉네임 입력"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              width="230px"
              height="70px"
            />
          </div>
          <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
            <label>비밀번호</label>
            <StyleInput
              type="password"
              placeholder="비밀번호 입력"
              value={passwords}
              onChange={(e) => setPassword(e.target.value)}
              width="230px"
              height="70px"
            />
          </div>
        </div>
      </div>
      <label>내용</label>
      <StyleInput
        placeholder="함께하고 싶은 모임의 활동을 자세히 소개해 주세요. (30자 이상)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        width="1300px"
        height="150px"
      />
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <StyledLabel htmlFor="time">시간</StyledLabel>
          <StyleInput
            type="date"
            placeholder="시간"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            width="250px"
            height="70px"
          />
        </div>
        <div style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
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
          <label>커버 이미지</label>
          <StyleInput type="file" placeholder="파일 선택" onChange={handleImageChange} width="250px" height="70px" />
        </div>

        <div style={{ marginLeft: 'auto', marginTop: 'auto' }}>
          <CancelButton onClick={handleClickCancel}>취소</CancelButton>
          <DoneButton onClick={handleClickConfirm}>완료</DoneButton>
        </div>
      </div>
      <SelectCategory />
    </StyleFormConatiner>
  );
};

export default UploadPost;
