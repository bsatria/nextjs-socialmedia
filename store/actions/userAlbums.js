import fetch from "../../lib/fetch";
import actionTypes from "../type";

const { PUBLIC_API } = process.env;

// reducer
const userAlbumsList = data => ({
  type: actionTypes.GET_USER_ALBUMS_LIST,
  payload: {
    results: data,
    loading: false
  }
});

const userAlbumsListReq = () => ({
  type: actionTypes.GET_USER_ALBUMS_LIST_REQUEST
});

const userAlbumsListFail = error => ({
  type: actionTypes.GET_USER_ALBUMS_LIST_FAILURE,
  payload: error,
  error: true
});

// component
// eslint-disable-next-line import/prefer-default-export
export const getUserAlbums = query => dispatch => {
  dispatch(userAlbumsListReq());
  const url = `${PUBLIC_API}${query}`;
  return fetch(url, "get")
    .then(result => {
      dispatch(userAlbumsList(result));
      return result;
    })
    .catch(error => dispatch(userAlbumsListFail(error)));
};
