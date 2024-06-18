import { supabase } from './supabase';

export const getPosts = async (postId) => {
  try {
    const { data } = await supabase.from('posts_test').select().eq('id', postId);
    return data;
  } catch (error) {
    console.error('Error=> ', error);
    alert('데이터 불러오기 실패!');
  }
};
