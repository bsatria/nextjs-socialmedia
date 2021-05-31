import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";

function MessageComponent({ title, type, show }) {
  function typeRender() {
    if (type === "success") {
      return "green";
    }
    return "red";
  }
  return (
    <Message color={typeRender()} style={{ display: show ? "block" : "none" }}>
      {title}
    </Message>
  );
}

MessageComponent.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

export default MessageComponent;
