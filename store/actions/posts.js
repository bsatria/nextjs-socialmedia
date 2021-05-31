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

// component
// eslint-disable-next-line import/prefer-default-export
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
