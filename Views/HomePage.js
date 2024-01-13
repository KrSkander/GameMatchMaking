import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import TennisNewsService from "../Services/TennisNewsService";
import theme from "../Theme/Theme";
const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.white,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 70,
    right: 5,
    flex: 1,
  },
  toolbarContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});

export default HomePage;
