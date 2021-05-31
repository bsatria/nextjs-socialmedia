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
          <a>Album : {val.title}</a>
        </Card.Header>
        <Card.Description>Id : {val.id}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link
          href={{
            pathname: "/albums/[slug]/photos",
            query: { userId: val.id }
          }}
          as={`/albums/${val.id}/photos`}
          prefetch
        >
          <Button color="orange">See List of Photos</Button>
        </Link>
      </Card.Content>
    </Card>
  </Grid.Column>
);

UserCard.propTypes = {
  val: PropTypes.object.isRequired
};

export default UserCard;
