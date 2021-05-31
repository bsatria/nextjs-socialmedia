import fetch from "../../lib/fetch";
import actionTypes from "../type";

const { PUBLIC_API } = process.env;

// reducer
const commentList = data => ({
  type: actionTypes.GET_COMMENTS_LIST,
  payload: {
    results: data,
    loading: false
  }
});

const commentListReq = () => ({
  type: actionTypes.GET_COMMENTS_LIST_REQUEST
});

const commentListFail = error => ({
  type: actionTypes.GET_COMMENTS_LIST_FAILURE,
  payload: error,
  error: true
});

const actionComment = data => ({
  type: actionTypes.ACTION_COMMENTS,
  payload: {
    results: data,
    loading: false
  }
});

const actionCommentReq = () => ({
  type: actionTypes.ACTION_COMMENTS_REQUEST
});

const actionCommentFail = error => ({
  type: actionTypes.ACTION_COMMENTS_FAILURE,
  payload: error,
  error: true
});

// component
export const getComments = () => dispatch => {
  dispatch(commentListReq());
  const url = `${PUBLIC_API}/comments`;
  return fetch(url, "get")
    .then(result => {
      dispatch(commentList(result));
      return result;
    })
    .catch(error => dispatch(commentListFail(error)));
};

export const onCreateComment = payload => dispatch => {
  dispatch(actionCommentReq());
  const url = `${PUBLIC_API}/comments`;
  return fetch(url, "post", payload)
    .then(result => {
      dispatch(actionComment(result));
      return result;
    })
    .catch(error => dispatch(actionCommentFail(error)));
};

export const onUpdateComment = payload => dispatch => {
  dispatch(actionCommentReq());
  const url = `${PUBLIC_API}/comments/${payload.id}`;
  return fetch(url, "put", payload)
    .then(result => {
      dispatch(actionComment(result));
      return result;
    })
    .catch(error => dispatch(actionCommentFail(error)));
};

export const onDeleteComment = payload => dispatch => {
  dispatch(actionCommentReq());
  const url = `${PUBLIC_API}/comments/${payload.id}`;
  return fetch(url, "delete")
    .then(result => {
      dispatch(actionComment(result));
      return result;
    })
    .catch(error => dispatch(actionCommentFail(error)));
};
