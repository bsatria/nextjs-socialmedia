import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";

import withReduxStore from "../lib/with-redux-store";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
