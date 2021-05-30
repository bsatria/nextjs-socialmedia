import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Card, Image, Grid } from "semantic-ui-react";

const Cards = ({ val }) => (
  <Grid.Column style={{ marginBottom: 10 }}>
    <Card>
      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Card.Content>
        <Card.Header>
          <Link href={`/${val.id}`} as={`/${val.id}`} prefetch>
            <a>{val.name}</a>
          </Link>
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
        <Link href={`/${val.id}`} as={`/${val.id}`} prefetch>
          <a>See Detail</a>
        </Link>
      </Card.Content>
    </Card>
  </Grid.Column>
);

Cards.propTypes = {
  val: PropTypes.object.isRequired
};

export default Cards;
