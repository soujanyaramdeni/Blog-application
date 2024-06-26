// src/redux/reducers.js

import { combineReducers } from 'redux';
import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  TOGGLE_THEME,
} from './actions';

const initialPosts = {
  posts: [],
};

const postsReducer = (state = initialPosts, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case EDIT_POST:
      const { postId, updatedPost } = action.payload;
      const updatedPosts = state.posts.map((post) =>
        post.id === postId ? { ...post, ...updatedPost } : post
      );
      return {
        ...state,
        posts: updatedPosts,
      };
    case DELETE_POST:
      const filteredPosts = state.posts.filter(
        (post) => post.id !== action.payload
      );
      return {
        ...state,
        posts: filteredPosts,
      };
    default:
      return state;
  }
};

const initialTheme = {
  darkMode: false,
};

const themeReducer = (state = initialTheme, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
  theme: themeReducer,
});

export default rootReducer;


