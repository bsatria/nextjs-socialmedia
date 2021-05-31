import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import AlbumCard from "./AlbumCard";

function UserAlbums() {
  const userAlbums = useSelector(state => state.userAlbums);
  const dataUserAlbums = userAlbums.results || [];

  return (
    <Grid
      style={{ paddingLeft: 20, boxSizing: "border-box", overflow: "auto" }}
      id="wrapper"
    >
      <Grid.Row columns={5}>
        {dataUserAlbums.length > 0
          ? dataUserAlbums.map((val, id) => <AlbumCard val={val} key={id} />)
          : "Data tidak ditemukan"}
      </Grid.Row>
    </Grid>
  );
}

UserAlbums.propTypes = {
  dispatch: PropTypes.func,
  router: PropTypes.object
};

export default UserAlbums;
