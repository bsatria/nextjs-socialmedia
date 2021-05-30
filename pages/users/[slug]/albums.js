import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import Layout from "../../../components/@layout";
import Home from "../../../components/Home";
import { getUsers } from "../../../store/actions/users";

function IndexUserPosts(props) {
  return (
    <Layout title="NextJS - React Redux Hooks - Social Media App by Bagas Satria">
      tes user albums
    </Layout>
  );
}

IndexUserPosts.getInitialProps = async context => {
  const { reduxStore, asPath } = context;
  const user = await reduxStore.dispatch(getUsers(asPath));
  return {};
};

IndexUserPosts.propTypes = {
  //   user: PropTypes.object.isRequired,
  //   router: PropTypes.object.isRequired
};

export default withRouter(IndexUserPosts);
