import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Pagination, Button, Icon } from "semantic-ui-react";
import Table from "../@component/Table";
import ModalComponent from "../@component/ModalPost";
import Message from "../@component/Message";
import {
  onCreatePost,
  onUpdatePost,
  onDeletePost
} from "../../store/actions/posts";

function Posts() {
  const { posts, actionPost } = useSelector(state => state);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("add");
  const [form, setForm] = useState({ title: "", body: "", userId: null });
  const [message, setMessage] = useState({ title: "", type: "", show: false });
  const [perPage] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [activeData, setActiveData] = useState(
    posts.results.slice(0, perPage) || []
  );
  const totalData = posts.results.length;
  const page = totalData / perPage;
  const column = [
    {
      id: "ID",
      title: "TITLE",
      body: "DESCRIPTION",
      action: "ACTION"
    }
  ];

  function changePage(e, val) {
    const { activePage: active } = val;
    const endRange = perPage * active;
    const starRange = endRange - perPage;
    const getDataPerPage = posts.results.slice(starRange, endRange);
    setActiveData(getDataPerPage);
    setActivePage(active);
  }

  function onEdit(val) {
    setIsOpen(true);
    setType("edit");
    setForm({
      title: val.title,
      body: val.body,
      id: val.id,
      userId: val.userId
    });
  }

  function onDelete(params) {
    setType("delete");
    dispatch(onDeletePost(params)).then(val => {
      if (val) {
        setMessage({
          title: "Success Delete Post",
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

  function onAddPost() {
    if (type === "add") {
      dispatch(onCreatePost(form)).then(val => {
        if (val) {
          setMessage({
            title: "Success Add Post",
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
      dispatch(onUpdatePost(form)).then(val => {
        if (val) {
          setMessage({
            title: "Success Update Post",
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
    setForm({ title: "", body: "", userId: null });
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
            <Icon name="plus" /> Add Post
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
          onSubmit={onAddPost}
          message={<Message {...message} />}
          loading={actionPost.loading}
          onChange={onChangeForm}
          open={isOpen}
          setIsOpen={setIsOpen}
          title="Post"
        />
      </Grid>
    </Grid>
  );
}

Posts.propTypes = {
  dispatch: PropTypes.func,
  router: PropTypes.object
};

export default Posts;
