import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, View, Text } from "native-base";

class TabThree extends Component {
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
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TabThree;
