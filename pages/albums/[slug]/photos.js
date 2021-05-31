import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { isEmpty } from "underscore";

import Layout from "../../../components/@layout";
import AlbumPhotos from "../../../components/AlbumPhotos";
import { getAlbumPhotos } from "../../../store/actions/albumPhotos";

function IndexAlbumPhotos(props) {
  return (
    <Layout
      title={`NextJS React Redux Hooks | List Photos of ${props.photoTitle}`}
      isBack={true}
    >
      <AlbumPhotos router={props.router} />
    </Layout>
  );
}

IndexAlbumPhotos.getInitialProps = async context => {
  const { reduxStore, asPath, query } = context;
  const userAlbums = await reduxStore.dispatch(getAlbumPhotos(asPath));
  const queryEmpty = isEmpty(query);
  let photoTitle = "";
  if (!queryEmpty) {
    const findTitle = reduxStore
      .getState()
      .userAlbums.results.find(val => val.id === Number(query.albumId));
    photoTitle = findTitle.title;
  }

  return { userAlbums, photoTitle };
};

IndexAlbumPhotos.propTypes = {
  userAlbums: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
  photoTitle: PropTypes.string.isRequired
};

export default withRouter(IndexAlbumPhotos);
