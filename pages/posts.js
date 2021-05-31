import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import Layout from "../components/@layout";
import Posts from "../components/Posts";
import { getPosts } from "../store/actions/posts";

function PostPage() {
  return (
    <Layout title="Posts Module">
      <Posts />
    </Layout>
  );
}

PostPage.getInitialProps = async context => {
  const { reduxStore } = context;
  const posts = await reduxStore.dispatch(getPosts());
  return { posts };
};

PostPage.propTypes = {
  posts: PropTypes.array.isRequired
};

export default withRouter(PostPage);
