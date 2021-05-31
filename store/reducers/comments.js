import actionTypes from "../type";

export const comments = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_COMMENTS_LIST:
      return { ...state, loading: false, ...action.payload };
    case actionTypes.GET_COMMENTS_LIST_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_COMMENTS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
};

export const actionComment = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_COMMENTS:
      return { ...state, loading: false, ...action.payload };
    case actionTypes.ACTION_COMMENTS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.ACTION_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
};
