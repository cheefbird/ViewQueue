import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { discoverMovies } from "../../actions";
import { Container, Content, List, ListItem } from "native-base";
import { Actions } from "react-native-router-flux";
import MovieDetail from "../../components/MovieDetail";

class DiscoverMovies extends Component {
  componentWillMount() {
    this.props.discoverMovies();
  }

  renderRow(movie) {
    return (
      <ListItem
        onPress={() => {
          Actions.movieDetails({ movie });
        }}
      >
        <MovieDetail movie={movie} />
      </ListItem>
    );
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Content>
          <List dataArray={this.props.movies} renderRow={this.renderRow} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { nextPage, results } = state.discoverResults;

  const movies = _.map(results, val => {
    return { ...val };
  });

  return { nextPage, movies };
};

export default connect(mapStateToProps, { discoverMovies })(DiscoverMovies);
