import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Grid, Pagination } from "semantic-ui-react";
import Table from "../@component/Table";

function Posts() {
  const posts = useSelector(state => state.posts);
  const [perPage] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [activeData, setActiveData] = useState(
    posts.results.slice(0, perPage) || []
  );
  const totalData = posts.results.length;
  const page = totalData / perPage;
  const column = [
    {
      id: "ID",
      title: "TITLE",
      body: "BODY"
    }
  ];

  function changePage(e, val) {
    const { activePage: active } = val;
    const endRange = perPage * active;
    const starRange = endRange - perPage;
    const getDataPerPage = posts.results.slice(starRange, endRange);
    setActiveData(getDataPerPage);
    setActivePage(active);
  }

  return (
    <Grid
      style={{ paddingLeft: 20, boxSizing: "border-box", overflow: "auto" }}
      id="wrapper"
    >
      <Grid columns={1} style={{ marginBottom: "20px" }} verticalAlign="middle">
        <Grid.Column>
          <Table column={column} data={activeData} />
          <Pagination
            activePage={activePage}
            onPageChange={changePage}
            totalPages={page}
          />
        </Grid.Column>
      </Grid>
    </Grid>
  );
}

Posts.propTypes = {
  dispatch: PropTypes.func,
  router: PropTypes.object
};

export default Posts;
