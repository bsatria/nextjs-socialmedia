import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Card, Image, Grid, Button } from "semantic-ui-react";

const UserCard = ({ val }) => (
  <Grid.Column style={{ marginBottom: 10 }}>
    <Card>
      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Card.Content>
        <Card.Header>
          <a>{val.title}</a>
        </Card.Header>
        <Card.Description>{val.body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link
          href={{
            pathname: `/users/[slug]/posts`,
            query: { id: val.id }
          }}
          as={`/users/${val.id}/posts`}
          prefetch
        >
          <Button color="blue">See Posts</Button>
        </Link>
        <Link
          href={`/users/${val.id}/albums`}
          as={`/users/${val.id}/albums`}
          prefetch
        >
          <Button color="red">See Albums</Button>
        </Link>
      </Card.Content>
    </Card>
  </Grid.Column>
);

UserCard.propTypes = {
  val: PropTypes.object.isRequired
};

export default UserCard;
