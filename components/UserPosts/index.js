import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "semantic-ui-react";
import PostCard from "./PostCard";
import ModalComponent from "../@component/ModalComment";
import LoadingComponent from "../@component/Loader";
import { getDetailComments } from "../../store/actions/userPosts";

function UserPosts() {
  const userPosts = useSelector(state => state.userPosts);
  const detailComments = useSelector(state => state.detailComments);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const dataUserPosts = userPosts.results || [];

  function getComments(id) {
    setIsOpen(true);
    dispatch(getDetailComments(id));
  }

  return (
    <Grid
      style={{ paddingLeft: 30, boxSizing: "border-box", overflow: "auto" }}
      id="wrapper"
    >
      <Grid.Row columns={5}>
        {dataUserPosts.length > 0
          ? dataUserPosts.map((val, id) => (
              <PostCard val={val} key={id} getComments={getComments} />
            ))
          : "Data tidak ditemukan"}
      </Grid.Row>
      <ModalComponent
        open={isOpen}
        setIsOpen={setIsOpen}
        data={detailComments}
        loadingComponent={<LoadingComponent />}
      />
    </Grid>
  );
}

UserPosts.propTypes = {
  dispatch: PropTypes.func,
  router: PropTypes.object
};

export default UserPosts;
