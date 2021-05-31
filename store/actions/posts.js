import fetch from "../../lib/fetch";
import actionTypes from "../type";

const { PUBLIC_API } = process.env;

// reducer
const postList = data => ({
  type: actionTypes.GET_POSTS_LIST,
  payload: {
    results: data,
    loading: false
  }
});

const postListReq = () => ({
  type: actionTypes.GET_POSTS_LIST_REQUEST
});

const postListFail = error => ({
  type: actionTypes.GET_POSTS_LIST_FAILURE,
  payload: error,
  error: true
});

const createPost = data => ({
  type: actionTypes.ACTION_POSTS,
  payload: {
    results: data,
    loading: false
  }
});

const createPostReq = () => ({
  type: actionTypes.ACTION_POSTS_REQUEST
});

const createPostFail = error => ({
  type: actionTypes.ACTION_POSTS_FAILURE,
  payload: error,
  error: true
});

// component
export const getPosts = () => dispatch => {
  dispatch(postListReq());
  const url = `${PUBLIC_API}/posts`;
  return fetch(url, "get")
    .then(result => {
      dispatch(postList(result));
      return result;
    })
    .catch(error => dispatch(postListFail(error)));
};

export const onCreatePost = payload => dispatch => {
  dispatch(createPostReq());
  const url = `${PUBLIC_API}/posts`;
  return fetch(url, "post", payload)
    .then(result => {
      dispatch(createPost(result));
      return result;
    })
    .catch(error => dispatch(createPostFail(error)));
};

export const onUpdatePost = payload => dispatch => {
  dispatch(createPostReq());
  const url = `${PUBLIC_API}/posts/${payload.id}`;
  return fetch(url, "put", payload)
    .then(result => {
      dispatch(createPost(result));
      return result;
    })
    .catch(error => dispatch(createPostFail(error)));
};

export const onDeletePost = payload => dispatch => {
  dispatch(createPostReq());
  const url = `${PUBLIC_API}/posts/${payload.id}`;
  return fetch(url, "delete")
    .then(result => {
      dispatch(createPost(result));
      return result;
    })
    .catch(error => dispatch(createPostFail(error)));
};
