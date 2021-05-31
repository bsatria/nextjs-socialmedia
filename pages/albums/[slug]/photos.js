import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { isEmpty } from "underscore";

import Layout from "../../../components/@layout";
import AlbumPhotos from "../../../components/AlbumPhotos";
import { getAlbumPhotos } from "../../../store/actions/albumPhotos";

function IndexAlbumPhotos(props) {
  return (
    <Layout title={`NextJS React Redux Hooks | ${props.userName} - Albums`}>
      <AlbumPhotos router={props.router} />
    </Layout>
  );
}

IndexAlbumPhotos.getInitialProps = async context => {
  const { reduxStore, asPath, query } = context;
  const userAlbums = await reduxStore.dispatch(getAlbumPhotos(asPath));
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

IndexAlbumPhotos.propTypes = {
  userAlbums: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired
};

export default withRouter(IndexAlbumPhotos);
