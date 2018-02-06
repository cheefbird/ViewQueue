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
    return (
      <Container>
        <Content>
          <List dataArray={this.props.newMovies} renderRow={this.renderRow} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { nextPage, movies } = state.discoverResults;

  const newMovies = _.map(movies, val => {
    return { ...val };
  });

  return { nextPage, newMovies };
};

export default connect(mapStateToProps, { discoverMovies })(DiscoverMovies);
