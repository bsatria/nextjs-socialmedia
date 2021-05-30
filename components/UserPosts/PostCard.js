import React from "react";
import PropTypes from "prop-types";
import { Card, Image, Grid, Button } from "semantic-ui-react";

const PostCard = ({ val, getComments }) => (
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
        <Button color="blue" onClick={() => getComments(val.id)}>
          See Comments
        </Button>
      </Card.Content>
    </Card>
  </Grid.Column>
);

PostCard.propTypes = {
  val: PropTypes.object.isRequired,
  getComments: PropTypes.func.isRequired
};

export default PostCard;
