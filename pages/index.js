import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import Layout from "../components/@layout";
import Home from "../components/Home";
import { getUsers } from "../store/actions/users";

function IndexPage(props) {
  return (
    <Layout title="NextJS - React Redux Hooks - Social Media App by Bagas Satria">
      <Home router={props.router} />
    </Layout>
  );
}

IndexPage.getInitialProps = async context => {
  const { reduxStore } = context;
  const user = await reduxStore.dispatch(getUsers());
  return { user };
};

IndexPage.propTypes = {
  user: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired
};

export default withRouter(IndexPage);
