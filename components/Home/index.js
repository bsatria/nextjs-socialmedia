import React, { Component } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import Cards from "./Cards";

class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func,
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: props.router.query.page || 1
    };
  }

  // changePage = (event, { activePage }) => {
  //   const { router } = this.props;
  //   Router.push({
  //     pathname: "/",
  //     query: { page: activePage, search: router.query.search }
  //   });
  //   this.setState({
  //     page: activePage
  //   });
  // };

  // infinityScroll = () => {
  //   const that = this;
  //   window.onscroll = function(ev) {
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.querySelector("#__next").scrollHeight
  //     ) {
  //       const { router, user } = that.props;
  //       const pageLocation = that.state.page + 1;
  //       that.setState({
  //         page: pageLocation,
  //         data: [...that.state.data, ...(user.results || [])]
  //       });
  //       Router.push({
  //         pathname: "/",
  //         query: { page: pageLocation, search: router.query.search }
  //       });
  //     }
  //   };
  // };

  // componentDidMount() {
  //   this.infinityScroll();
  // }

  render() {
    const { user, router } = this.props;
    // const { count, results: movies } = results || [];
    // const { page } = this.state;
    const dataUser = router.query.search
      ? user.results || []
      : [...this.state.data, ...(user.results || [])];
    // const totalPagination =
    //   movies?.results === 10
    //     ? Math.round(count / movies.length)
    //     : Math.round(count / 10) || 0;
    return (
      <Grid
        style={{ paddingLeft: 20, boxSizing: "border-box", overflow: "auto" }}
        id="wrapper"
      >
        <Grid.Row columns={5}>
          {dataUser.length > 0
            ? dataUser.map((val, id) => <Cards val={val} key={id} />)
            : "Data tidak ditemukan"}
        </Grid.Row>
        {/* disable pagination */}
        {/* <Grid
          columns={1}
          style={{ marginBottom: "20px" }}
          verticalAlign="middle"
        >
          <Grid.Column>
            <Pagination
              activePage={page}
              onPageChange={this.changePage}
              totalPages={totalPagination}
            />
          </Grid.Column>
        </Grid> */}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps)(Home);
