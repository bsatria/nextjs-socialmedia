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
          <a>{val.name}</a>
        </Card.Header>
        <Card.Meta>
          <span className="date">Username : {val.username}</span>
          <br />
          <span className="date">Email : {val.email}</span>
          <br />
          <span className="date">
            Adress : {val.address.street}, {val.address.suite},{" "}
            {val.address.city}, {val.address.zipcode}
          </span>
          <br />
          <span className="date">Phone : {val.phone}</span>
          <br />
          <span className="date">Website : {val.website}</span>
          <br />
          <span className="date">Company : {val.company.name}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Link
          href={{
            pathname: "/users/[slug]/posts",
            query: { userId: val.id }
          }}
          as={`users/${val.id}/posts`}
          prefetch
        >
          <Button color="blue">See Posts</Button>
        </Link>
        <Link
          href={{
            pathname: "/users/[slug]/albums",
            query: { userId: val.id }
          }}
          as={`users/${val.id}/albums`}
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
