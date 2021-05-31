import { combineReducers } from "redux";

import { user, userDetail } from "./users";
import { userPosts, detailComments } from "./posts";
import { userAlbums } from "./albums";
import { albumPhotos } from "./albumPhotos";

export default combineReducers({
  user,
  userDetail,
  userPosts,
  detailComments,
  userAlbums,
  albumPhotos
});
