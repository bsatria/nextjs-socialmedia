import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Router, { withRouter } from "next/router";
import Layout from "../components/@layout";
import Home from "../components/Home";
import { getUsers } from "../components/Home/actions";
import { debounce } from "../lib/utils";

class WrapHome extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    router: PropTypes.object
  };

  static async getInitialProps(context) {
    const { reduxStore, asPath } = context;
    const user = await reduxStore.dispatch(getUsers(asPath));
    return { user };
  }

  onSearch = debounce((e, data) => {
    Router.push({
      pathname: "/",
      query: { page: 1, search: data.value }
    });
  }, 500);

  render() {
    const { router } = this.props;
    return (
      <Layout title="NextJS - user App" search={this.onSearch}>
        <Home router={router} />
      </Layout>
    );
  }
}

export default connect()(withRouter(WrapHome));
