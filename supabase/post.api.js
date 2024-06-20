import { supabase } from './supabase';

export const getPost = async (postId) => {
  try {
    const { data } = await supabase.from('posts_test').select().eq('id', postId);
    return data;
  } catch (error) {
    console.error('Error=> ', error);
    alert('포스트 데이터 불러오기 실패!');
  }
};

export const getPosts = async () => {
  try {
    const { data } = await supabase.from('posts_test').select();
    return data;
  } catch (error) {
    console.error('Error => ', error);
    alert('포스트 데이터 불러오기 실패!');
  }
};

export const getPosition = async (postId) => {
  try {
    const { data } = await supabase.from('posts_test').select('map_lng, map_lat').eq('id', postId);
    return data;
  } catch (error) {
    console.error('Error=> ', error);
    alert('포스트 데이터 불러오기 실패!');
  }
};
