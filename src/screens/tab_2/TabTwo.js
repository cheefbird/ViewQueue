import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, View, Text } from "native-base";

class TabTwo extends Component {
  // state = {  }
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.rootView}>
            <Text>Tab Number Two</Text>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue"
  }
});

export default TabTwo;
