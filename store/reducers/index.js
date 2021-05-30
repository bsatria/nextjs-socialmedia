import { combineReducers } from "redux";

import { user, userDetail } from "./users";

export default combineReducers({
  user,
  userDetail
});
