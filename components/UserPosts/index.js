import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import PostCard from "./PostCard";

function Home() {
  const userPosts = useSelector(state => state.userPosts);
  const dataUserPosts = userPosts.results || [];

  return (
    <Grid
      style={{ paddingLeft: 20, boxSizing: "border-box", overflow: "auto" }}
      id="wrapper"
    >
      <Grid.Row columns={5}>
        {dataUserPosts.length > 0
          ? dataUserPosts.map((val, id) => <PostCard val={val} key={id} />)
          : "Data tidak ditemukan"}
      </Grid.Row>
    </Grid>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func,
  router: PropTypes.object
};

export default Home;
