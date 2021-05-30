import actionTypes from "../type";

// eslint-disable-next-line import/prefer-default-export
export const userAlbums = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_USER_ALBUMS_LIST:
      return { ...state, loading: false, ...action.payload };
    case actionTypes.GET_USER_ALBUMS_LIST_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_USER_ALBUMS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
};
