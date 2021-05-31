import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import Layout from "../components/@layout";
import Comments from "../components/Comments";
import { getComments } from "../store/actions/comments";

function CommentsPage() {
  return (
    <Layout title="Comments Module">
      <Comments />
    </Layout>
  );
}

CommentsPage.getInitialProps = async context => {
  const { reduxStore } = context;
  const comments = await reduxStore.dispatch(getComments());
  return { comments };
};

CommentsPage.propTypes = {
  comments: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default withRouter(CommentsPage);
