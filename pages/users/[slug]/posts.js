import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { isEmpty } from "underscore";

import Layout from "../../../components/@layout";
import UserPosts from "../../../components/UserPosts";
import { getUserPosts } from "../../../store/actions/userPosts";

function IndexUserPosts(props) {
  return (
    <Layout title={`NextJS React Redux Hooks | ${props.userName} - Posts`}>
      <UserPosts router={props.router} />
    </Layout>
  );
}

IndexUserPosts.getInitialProps = async context => {
  const { reduxStore, asPath, query } = context;
  const userPosts = await reduxStore.dispatch(getUserPosts(asPath));
  const queryEmpty = isEmpty(query);
  let userName = "";
  if (!queryEmpty) {
    const findUserName = reduxStore
      .getState()
      .user.results.find(val => val.id === Number(query.userId));
    userName = findUserName.name;
  }

  return { userPosts, userName };
};

IndexUserPosts.propTypes = {
  userPosts: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired
};

export default withRouter(IndexUserPosts);
