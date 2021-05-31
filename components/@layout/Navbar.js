import React from "react";
import Link from "next/link";
import { Header, Container, Menu, Segment, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const Navbar = ({ title, isBack }) => {
  const router = useRouter();

  return (
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
            <Link href="/comments">
              <a>
                <Button color="red">Comment</Button>
              </a>
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
      <Container text>
        <Header
          as="h1"
          content={title}
          inverted
          style={{
            fontWeight: "normal",
            marginTop: 30,
            marginBottom: 10
          }}
        />
        {isBack && (
          <Button color="red" onClick={() => router.back()}>
            Back
          </Button>
        )}
      </Container>
    </Segment>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  isBack: PropTypes.bool
};

export default Navbar;
