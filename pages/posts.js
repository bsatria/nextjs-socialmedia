import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import Layout from "../components/@layout";
import Posts from "../components/Posts";
import { getPosts } from "../store/actions/posts";

function IndexPage() {
  return (
    <Layout title="NextJS - React Redux Hooks - Social Media App by Bagas Satria">
      <Posts />
    </Layout>
  );
}

IndexPage.getInitialProps = async context => {
  const { reduxStore } = context;
  const posts = await reduxStore.dispatch(getPosts());
  return { posts };
};

IndexPage.propTypes = {
  posts: PropTypes.array.isRequired
};

export default withRouter(IndexPage);
