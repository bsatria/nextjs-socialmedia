import React from "react";
import PropTypes from "prop-types";
import { Button, Item, Modal } from "semantic-ui-react";

function ModalComment({ open, setIsOpen, data, loadingComponent }) {
  function renderContent() {
    if (data.loading) {
      return loadingComponent;
    }
    if (data.results) {
      return data.results.map(val => (
        <Item key={val.id}>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <Item.Content verticalAlign="top">{val.name}</Item.Content>
          <Item.Content verticalAlign="middle">{val.email}</Item.Content>
          <Item.Content verticalAlign="bottom">{val.body}</Item.Content>
        </Item>
      ));
    }
    return "Data Kosong";
  }
  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={open}
    >
      <Modal.Header>Detail Comment</Modal.Header>
      <Modal.Content image>
        <Item.Group divided>{renderContent()}</Item.Group>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

ModalComment.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  loadingComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired
};

export default ModalComment;
