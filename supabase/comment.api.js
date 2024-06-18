import { supabase } from './supabase';

export const getComments = async () => {
  try {
    const { data } = await supabase.from('comments_test').select();
    return data;
  } catch (error) {
    console.error('Error=> ', error);
    alert('댓글 데이터 불러오기 실패!');
  }
};
