import { combineReducers } from "redux";

import { user, userDetail } from "./users";
import { userPosts } from "./posts";

export default combineReducers({
  user,
  userDetail,
  userPosts
});
