import fetch from "../../lib/fetch";
import actionTypes from "../type";

const { PUBLIC_API } = process.env;

// reducer
const userPostsList = data => ({
  type: actionTypes.GET_USER_POSTS_LIST,
  payload: {
    results: data,
    loading: false
  }
});

const userPostsListReq = () => ({
  type: actionTypes.GET_USER_POSTS_LIST_REQUEST
});

const userPostsListFail = error => ({
  type: actionTypes.GET_USER_POSTS_LIST_FAILURE,
  payload: error,
  error: true
});

// component
// eslint-disable-next-line import/prefer-default-export
export const getUserPosts = query => dispatch => {
  dispatch(userPostsListReq());
  const url = `${PUBLIC_API}${query}`;
  return fetch(url, "get")
    .then(result => {
      dispatch(userPostsList(result));
      return result;
    })
    .catch(error => dispatch(userPostsListFail(error)));
};
