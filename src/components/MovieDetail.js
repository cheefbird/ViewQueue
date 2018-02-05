import React, { Component } from "react";
import { Image } from "react-native";
import { View, Text } from "native-base";

class MovieDetail extends Component {
  fullPosterPath(imageName) {
    return `https://image.tmdb.org/t/p/w92${imageName}`;
  }

  render() {
    const { title, overview, poster_path } = this.props.movie;

    const posterImage = this.fullPosterPath(poster_path);

    console.log("A poster image path:\n");
    console.log(posterImage);

    return (
      <View style={styles.rootContainer}>
        <View style={styles.thumbContainer}>
          <Image
            source={{ uri: posterImage }}
            style={{ width: 92, height: 138 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>{title}</Text>
          <Text style={{ fontSize: 18 }}>2018-01-01</Text>
          <Text style={{ fontSize: 14 }}>{overview}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  rootContainer: {
    flex: 1,
    flexDirection: "row"
  },
  thumbContainer: {
    marginRight: 8
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch"
  }
};

export default MovieDetail;