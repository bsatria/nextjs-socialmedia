import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { isEmpty } from "underscore";

import Layout from "../../../components/@layout";
import UserAlbums from "../../../components/UserAlbums";
import { getUserAlbums } from "../../../store/actions/userAlbums";

function IndexUserAlbums(props) {
  return (
    <Layout title={`NextJS React Redux Hooks | ${props.userName} - Albums`}>
      <UserAlbums router={props.router} />
    </Layout>
  );
}

IndexUserAlbums.getInitialProps = async context => {
  const { reduxStore, asPath, query } = context;
  const userAlbums = await reduxStore.dispatch(getUserAlbums(asPath));
  const queryEmpty = isEmpty(query);
  let userName = "";
  if (!queryEmpty) {
    const findUserName = reduxStore
      .getState()
      .user.results.find(val => val.id === Number(query.userId));
    userName = findUserName.name;
  }

  return { userAlbums, userName };
};

IndexUserAlbums.propTypes = {
  userAlbums: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired
};

export default withRouter(IndexUserAlbums);
