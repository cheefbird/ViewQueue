import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { discoverMovies } from "../actions";
import {
  Container,
  Content,
  Header,
  Body,
  List,
  ListItem,
  Title,
  Text
} from "native-base";

class DiscoverMovies extends Component {
  componentWillMount() {
    this.props.discoverMovies();

    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ movies }) {
    // this.
  }

  renderRow(movie) {
    return (
      <ListItem>
        <Text>{movie.title}</Text>
      </ListItem>
    );
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Header>
          <Body>
            <Title>Discover Movies</Title>
          </Body>
        </Header>
        <Content>
          <List dataArray={this.props.movies} renderRow={this.renderRow} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const movies = _.map(state.movies, val => {
    return { ...val };
  });
  console.log(movies);
  return { movies };
};

export default connect(mapStateToProps, { discoverMovies })(DiscoverMovies);
