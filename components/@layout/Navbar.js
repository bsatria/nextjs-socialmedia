import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  Header,
  Container,
  Menu,
  Segment,
  Button,
  Input
} from "semantic-ui-react";

const Navbar = ({ search }) => (
  <Segment
    textAlign="center"
    style={{
      minHeight: 150,
      backgroundColor: "cadetblue",
      marginTop: 45,
      marginBottom: 20
    }}
    vertical
  >
    <Menu fixed="top" size="large">
      <Container>
        <Menu.Item active>
          <Link href="/">
            <a>
              <Button color="green">Users</Button>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item active>
          <Link href="/posts">
            <a>
              <Button color="blue">Posts</Button>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item active>
          <Link href="/posts">
            <a>
              <Button color="red">Album</Button>
            </a>
          </Link>
        </Menu.Item>
      </Container>
    </Menu>
    <Container text>
      <Header
        as="h1"
        content="SOCIAL MEDIA APP"
        inverted
        style={{
          fontSize: "3em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: 30
        }}
      />
      {typeof search === "function" && (
        <Input icon="search" placeholder="Search..." onChange={search} />
      )}
    </Container>
  </Segment>
);

Navbar.propTypes = {
  search: PropTypes.func
};

export default Navbar;
