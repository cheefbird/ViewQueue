import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { discoverMovies, showDetails } from "../../actions";
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

  onRowPress(movie) {
    // this.props.showDetails(movie);
    Actions.movieDetail();
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
  const movies = _.map(state.movies, val => {
    return { ...val };
  });
  console.log(movies);
  return { movies };
};

export default connect(mapStateToProps, { discoverMovies, showDetails })(
  DiscoverMovies
);
