import actionTypes from "../type";

export const user = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_USER_LIST:
      return { ...state, loading: false, ...action.payload };
    case actionTypes.GET_USER_LIST_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_USER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
};

export const userDetail = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_USER_LIST_DETAIL:
      return { ...state, loading: false, ...action.payload };
    case actionTypes.GET_USER_LIST_DETAIL_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_USER_LIST_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
};
