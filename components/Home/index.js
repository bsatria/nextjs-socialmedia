import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import UserCard from "./UserCard";

function Home() {
  const user = useSelector(state => state.user);
  const dataUser = user.results || [];

  return (
    <Grid
      style={{ paddingLeft: 20, boxSizing: "border-box", overflow: "auto" }}
      id="wrapper"
    >
      <Grid.Row columns={5}>
        {dataUser.length > 0
          ? dataUser.map((val, id) => <UserCard val={val} key={id} />)
          : "Data tidak ditemukan"}
      </Grid.Row>
    </Grid>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func,
  router: PropTypes.object
};

export default Home;
