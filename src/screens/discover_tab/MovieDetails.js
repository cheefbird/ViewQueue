import React, { Component } from "react";
import { Image } from "react-native";
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
          <View style={{ flex: 1, flexDirection: "column", marginTop: 4 }}>
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: backdropImage }}
                style={{ width: "100%", minHeight: 100 }}
                aspectRatio={1.8}
                resizeMethod={"scale"}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 4
              }}
            >
              <View>
                <Image
                  source={{ uri: posterImage }}
                  style={{ width: 92, height: 136, margin: 8 }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  margin: 8
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 24 }}>
                  {title}
                </Text>
                <Text>{release_date}</Text>
              </View>
            </View>
            <View style={{ padding: 8 }}>
              <Text>{overview}</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default MovieDetails;
