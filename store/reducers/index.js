import { combineReducers } from "redux";

import { user, userDetail } from "./users";
import { posts, actionPost } from "./posts";
import { comments, actionComment } from "./comments";
import { userPosts, detailComments } from "./userPosts";
import { userAlbums } from "./albums";
import { albumPhotos } from "./albumPhotos";

export default combineReducers({
  user,
  posts,
  userDetail,
  userPosts,
  detailComments,
  userAlbums,
  albumPhotos,
  actionPost,
  comments,
  actionComment
});
