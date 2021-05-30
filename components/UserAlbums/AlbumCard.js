import React from "react";
import PropTypes from "prop-types";
import { Card, Image, Grid } from "semantic-ui-react";

const UserCard = ({ val }) => (
  <Grid.Column style={{ marginBottom: 10 }}>
    <Card>
      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Card.Content>
        <Card.Header>
          <a>{val.title}</a>
        </Card.Header>
        <Card.Description>{val.id}</Card.Description>
      </Card.Content>
    </Card>
  </Grid.Column>
);

UserCard.propTypes = {
  val: PropTypes.object.isRequired
};

export default UserCard;
