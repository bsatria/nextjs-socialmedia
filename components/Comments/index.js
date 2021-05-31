import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Pagination, Button, Icon } from "semantic-ui-react";
import Table from "../@component/Table";
import ModalComponent from "../@component/ModalFormComment";
import Message from "../@component/Message";
import {
  onCreateComment,
  onUpdateComment,
  onDeleteComment
} from "../../store/actions/comments";

function Comments() {
  const { comments, actionComment } = useSelector(state => state);
  const dataComments = comments.results || [];
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("add");
  const [form, setForm] = useState({
    email: "",
    name: "",
    body: "",
    userId: null
  });
  const [message, setMessage] = useState({ title: "", type: "", show: false });
  const [perPage] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const initialActiveData = dataComments.slice(0, perPage) || [];
  const [activeData, setActiveData] = useState(initialActiveData);
  const totalData = dataComments.length;
  const page = totalData / perPage;
  const column = [
    {
      id: "ID",
      email: "EMAIL",
      name: "NAME",
      body: "DESCRIPTION",
      action: "ACTION"
    }
  ];

  function changePage(e, val) {
    const { activePage: active } = val;
    const endRange = perPage * active;
    const starRange = endRange - perPage;
    const getDataPerPage = comments.results.slice(starRange, endRange);
    setActiveData(getDataPerPage);
    setActivePage(active);
  }

  function onEdit(val) {
    setIsOpen(true);
    setType("edit");
    setForm({
      email: val.email,
      name: val.name,
      body: val.body,
      id: val.id,
      userId: val.userId
    });
  }

  function onDelete(params) {
    setType("delete");
    dispatch(onDeleteComment(params)).then(val => {
      if (val) {
        setMessage({
          title: "Success Delete Comment",
          type: "success",
          show: true
        });
        setTimeout(() => {
          setMessage({
            title: "",
            type: "",
            show: false
          });
        }, 2500);
      }
    });
  }

  function onAddComment() {
    if (type === "add") {
      dispatch(onCreateComment(form)).then(val => {
        if (val) {
          setMessage({
            title: "Success Add Comment",
            type: "success",
            show: true
          });
          setTimeout(() => {
            setMessage({
              title: "",
              type: "",
              show: false
            });
          }, 2500);
        }
      });
    } else if (type === "edit") {
      dispatch(onUpdateComment(form)).then(val => {
        if (val) {
          setMessage({
            title: "Success Update Comment",
            type: "success",
            show: true
          });
          setTimeout(() => {
            setMessage({
              title: "",
              type: "",
              show: false
            });
          }, 2500);
        }
      });
    }
  }

  function onActionAdd() {
    setForm({ name: "", email: "", body: "", userId: null });
    setIsOpen(true);
    setType("add");
  }

  function onChangeForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <Grid
      style={{ paddingLeft: 20, boxSizing: "border-box", overflow: "auto" }}
      id="wrapper"
    >
      <Grid columns={1} style={{ marginBottom: "20px" }} verticalAlign="middle">
        <Grid.Column>
          <Button color="green" onClick={onActionAdd}>
            <Icon name="plus" /> Add Comment
          </Button>
          {type === "delete" && <Message {...message} />}
          <Table
            column={column}
            data={activeData}
            onEditRow={onEdit}
            onDeleteRow={onDelete}
          />
          <Pagination
            activePage={activePage}
            onPageChange={changePage}
            totalPages={page}
          />
        </Grid.Column>
        <ModalComponent
          size="small"
          form={form}
          onSubmit={onAddComment}
          message={<Message {...message} />}
          loading={actionComment.loading}
          onChange={onChangeForm}
          open={isOpen}
          setIsOpen={setIsOpen}
          title="Comment"
        />
      </Grid>
    </Grid>
  );
}

Comments.propTypes = {
  dispatch: PropTypes.func,
  router: PropTypes.object
};

export default Comments;
