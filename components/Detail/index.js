import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Item, Grid } from "semantic-ui-react";

export class Detail extends Component {
  static propTypes = {
    movieDetail: PropTypes.object
  };

  render() {
    const { movieDetail } = this.props;
    return (
      <Grid style={{ marginBottom: 20 }}>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Item.Group>
              <Item>
                <Item.Image
                  size="medium"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />
                <Item.Content>
                  <Item.Header as="a">
                    Detail of {movieDetail.results.name}
                  </Item.Header>
                  <Item.Description>
                    <p>
                    {`${movieDetail.results.name} have a ${movieDetail.results.manufacturer} manufacturer, ${movieDetail.results.model} model, ${movieDetail.results.starship_class} starship class, ${movieDetail.results.crew} crew and ${movieDetail.results.cargo_capacity} cargo capacity `}
                    </p>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const { movieDetail } = state;
  return { movieDetail };
};

export default connect(mapStateToProps)(Detail);
