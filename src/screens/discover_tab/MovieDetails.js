import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { Container, Content, View, Text } from "native-base";
import { store, getState } from "react-redux";

class MovieDetails extends Component {
  // state = {  }
  render() {
    const {
      backdrop_path,
      poster_path,
      title,
      release_date,
      overview
    } = this.props.movie;

    const backdropImage = `https://image.tmdb.org/t/p/w780${backdrop_path}`;
    const posterImage = `https://image.tmdb.org/t/p/w92${poster_path}`;

    return (
      <Container>
        <Content>
          <View style={styles.rootView}>
            <View style={styles.flexOneView}>
              <Image
                source={{ uri: backdropImage }}
                style={styles.backdropImage}
                aspectRatio={1.8}
                resizeMethod={"scale"}
              />
            </View>
            <View style={styles.lowerContentContainer}>
              <View>
                <Image
                  source={{ uri: posterImage }}
                  style={styles.posterImage}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text>{release_date}</Text>
              </View>
            </View>
            <View style={styles.overviewText}>
              <Text>{overview}</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: "column",
    marginTop: 4
  },
  flexOneView: {
    flex: 1
  },
  backdropImage: {
    width: "100%",
    minHeight: 100
  },
  posterImage: {
    width: 92,
    height: 136,
    margin: 8
  },
  lowerContentContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 4
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 8
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 24
  },
  overviewText: {
    padding: 8
  }
});

export default MovieDetails;
