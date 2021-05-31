import fetch from "../../lib/fetch";
import actionTypes from "../type";

const { PUBLIC_API } = process.env;

// reducer
const albumPhotos = data => ({
  type: actionTypes.GET_ALBUM_PHOTOS_LIST,
  payload: {
    results: data,
    loading: false
  }
});

const albumPhotosReq = () => ({
  type: actionTypes.GET_ALBUM_PHOTOS_LIST_REQUEST
});

const albumPhotosFail = error => ({
  type: actionTypes.GET_ALBUM_PHOTOS_LIST_FAILURE,
  payload: error,
  error: true
});

// component
// eslint-disable-next-line import/prefer-default-export
export const getAlbumPhotos = query => dispatch => {
  dispatch(albumPhotosReq());
  const url = `${PUBLIC_API}${query}`;
  return fetch(url, "get")
    .then(result => {
      dispatch(albumPhotos(result));
      return result;
    })
    .catch(error => dispatch(albumPhotosFail(error)));
};
