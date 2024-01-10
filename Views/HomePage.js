import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Buttons from "../Components/Buttons";
import colors from "./Theme";
import Toolbar from "../Components/Toolbar";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>

      {/* <View style={styles.buttonsContainer}>
        <Buttons />
      </View>

      <View style={styles.toolbarContainer}>
        <Toolbar navigation={navigation} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
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
