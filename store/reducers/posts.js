import actionTypes from "../type";

// eslint-disable-next-line import/prefer-default-export
export const posts = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_LIST:
      return { ...state, loading: false, ...action.payload };
    case actionTypes.GET_POSTS_LIST_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_POSTS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
};

export const actionPost = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_POSTS:
      return { ...state, loading: false, ...action.payload };
    case actionTypes.ACTION_POSTS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.ACTION_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
};
