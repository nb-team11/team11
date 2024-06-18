import { supabase } from './supabase';

export const getComments = async (id) => {
  try {
    const { data } = await supabase.from('comments_test').select().eq('post_id', id);
    return data;
  } catch (error) {
    console.error('Error=> ', error);
    alert('댓글 데이터 불러오기 실패!');
  }
};

export const getComment = async (id) => {
  try {
    const { data } = await supabase.from('comments_test').select().eq('id', id);
    return data;
  } catch (error) {
    console.error('Error => ', error);
    alert('수정 또는 삭제할 댓글 데이터 불러오기 실패!');
  }
};

export const uploadComment = async (comment) => {
  try {
    const { data } = await supabase.from('comments_test').insert(comment);
    return data;
  } catch (error) {
    console.error('Error => ', error);
    alert('댓글 업로드 실패!');
  }
};

// export const editComment =

export const deleteComment = async (commentId) => {
  try {
    const { data } = await supabase.from('comments_test').delete().eq('id', commentId);
    return data;
  } catch (error) {
    console.error('Error => ', error);
    alert('댓글 삭제 실패!');
  }
};
