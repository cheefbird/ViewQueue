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
import MovieDetail from "../components/MovieDetail";

class DiscoverMovies extends Component {
  componentWillMount() {
    this.props.discoverMovies();
  }

  renderRow(movie) {
    return (
      <ListItem>
        <MovieDetail movie={movie} />
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
