import fetch from "../../lib/fetch";
import actionTypes from "../type";

const { PUBLIC_API } = process.env;

// reducer
const userList = data => ({
  type: actionTypes.GET_USER_LIST,
  payload: {
    results: data,
    loading: false
  }
});

const userListReq = () => ({
  type: actionTypes.GET_USER_LIST_REQUEST
});

const userListFail = error => ({
  type: actionTypes.GET_USER_LIST_FAILURE,
  payload: error,
  error: true
});

// component
export const getUsers = () => dispatch => {
  dispatch(userListReq());
  const url = `${PUBLIC_API}/users`;
  return fetch(url, "get")
    .then(result => {
      dispatch(userList(result));
      return result;
    })
    .catch(error => dispatch(userListFail(error)));
};

export const getMovieSearch = query => dispatch => {
  const url = `${PUBLIC_API}${query}`;
  return fetch(url, "get")
    .then(result => {
      dispatch(userList(result));
      return result;
    })
    .catch(error => error);
};
