import React, { Component } from "react";
import Layout from "../components/@layout";
import Detail from "../components/Detail";
import { getMovieDetail } from "../components/Detail/actions";

class WrapDetail extends Component {
  static async getInitialProps(context) {
    const { reduxStore, asPath } = context;
    const movieDetail = await reduxStore.dispatch(getMovieDetail(asPath));
    return { movieDetail };
  }

  render() {
    return (
      <Layout title="Movie App - Detail">
        <Detail />
      </Layout>
    );
  }
}

export default WrapDetail;
