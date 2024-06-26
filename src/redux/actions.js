// src/redux/actions.js

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const TOGGLE_THEME = 'TOGGLE_THEME';

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const editPost = (postId, updatedPost) => ({
  type: EDIT_POST,
  payload: { postId, updatedPost },
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
