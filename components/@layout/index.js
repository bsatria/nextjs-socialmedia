import React, { Fragment } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import Footer from "./Footer";

const HeadPage = ({ children, title, isBack }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,600,700"
        rel="stylesheet"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
      />
    </Head>
    <Navbar title={title} isBack={isBack} />
    {children}
    <Footer />
  </Fragment>
);

HeadPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  isBack: PropTypes.bool
};

export default HeadPage;
