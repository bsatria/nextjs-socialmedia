import React from "react";
import PropTypes from "prop-types";
import { Button, Item, Modal, Form } from "semantic-ui-react";

function ModalComment({
  open,
  message,
  setIsOpen,
  size,
  title,
  onSubmit,
  onChange,
  form,
  loading
}) {
  function renderForm() {
    return (
      <Form>
        {message}
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            onChange={onChange}
            type="text"
            value={form.email}
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <input
            name="name"
            onChange={onChange}
            type="text"
            value={form.name}
            placeholder="Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            name="body"
            onChange={onChange}
            value={form.body}
            type="text"
            placeholder="Description"
          />
        </Form.Field>
      </Form>
    );
  }
  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      size={size}
      open={open}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <Item.Group divided>{renderForm()}</Item.Group>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={onSubmit} loading={loading}>
          Submit
        </Button>
        <Button color="black" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

ModalComment.propTypes = {
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
  size: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.object,
  form: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ModalComment;
