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

const detailComments = data => ({
  type: actionTypes.GET_DETAIL_COMMENTS_LIST,
  payload: {
    results: data,
    loading: false
  }
});

const detailCommentsReq = () => ({
  type: actionTypes.GET_DETAIL_COMMENTS_LIST_REQUEST
});

const detailCommentsFail = error => ({
  type: actionTypes.GET_DETAIL_COMMENTS_LIST_FAILURE,
  payload: error,
  error: true
});

// component
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

export const getDetailComments = id => dispatch => {
  dispatch(detailCommentsReq());
  const url = `${PUBLIC_API}/posts/${id}/comments`;
  return fetch(url, "get")
    .then(result => {
      dispatch(detailComments(result));
      return result;
    })
    .catch(error => dispatch(detailCommentsFail(error)));
};
