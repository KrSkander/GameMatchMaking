import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import theme from "../Theme/Theme";
const StubbornButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.circleButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../assets/images/icons8-tennis-ball-96.png")}
          style={styles.tennisBallLogo}
        />
        <Text style={styles.buttonText}></Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.circleButton}>
        <Image
          source={require("../assets/images/icons8-settings-80.png")}
          style={styles.createGameLogo}
        />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "column-reverse",
  },
  circleButton: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.secondary,
    borderRadius: 100,
    padding: 20,
    marginBottom: 10,
    boxShadow: "rgba(0, 0, 0, 0.25) 4px 4px 5px",
  },
  tennisBallLogo: {
    width: 50,
    height: 50,
  },
  createGameLogo: {
    width: 50,
    height: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    marginTop: 5,
  },
});

export default StubbornButton;
