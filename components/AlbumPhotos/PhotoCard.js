import React from "react";
import PropTypes from "prop-types";
import { Card, Image, Grid } from "semantic-ui-react";

const PhotoCard = ({ val }) => (
  <Grid.Column style={{ marginBottom: 10 }}>
    <Card>
      <Image src={val.url} />
      <Card.Content>
        <Card.Header>
          <a>Photo of : {val.title}</a>
        </Card.Header>
        <Card.Description>Id : {val.id}</Card.Description>
      </Card.Content>
    </Card>
  </Grid.Column>
);

PhotoCard.propTypes = {
  val: PropTypes.object.isRequired
};

export default PhotoCard;
