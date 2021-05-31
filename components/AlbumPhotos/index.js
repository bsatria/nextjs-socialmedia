import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import PhotoCard from "./PhotoCard";

function AlbumPhotos() {
  const albumPhotos = useSelector(state => state.albumPhotos);
  const dataAlbumPhotos = albumPhotos.results || [];

  return (
    <Grid
      style={{ paddingLeft: 20, boxSizing: "border-box", overflow: "auto" }}
      id="wrapper"
    >
      <Grid.Row columns={5}>
        {dataAlbumPhotos.length > 0
          ? dataAlbumPhotos.map((val, id) => <PhotoCard val={val} key={id} />)
          : "Data tidak ditemukan"}
      </Grid.Row>
    </Grid>
  );
}

AlbumPhotos.propTypes = {
  dispatch: PropTypes.func,
  router: PropTypes.object
};

export default AlbumPhotos;
