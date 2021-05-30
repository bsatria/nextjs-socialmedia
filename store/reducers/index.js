import { combineReducers } from "redux";

import { user, userDetail } from "./users";
import { userPosts } from "./posts";
import { userAlbums } from "./albums";

export default combineReducers({
  user,
  userDetail,
  userPosts,
  userAlbums
});
