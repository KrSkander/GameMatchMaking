import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import theme from "../Theme/Theme";
import { useNavigation } from "@react-navigation/native";
import MainTennisButton from "./MainTennisButton";

const Toolbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.toolbarContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Games")}
      >
        {/* Home button */}
        <Image
          source={require("../assets/images/icons8-tennis-player-skin-type-1-96.png")}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        {/* Tournament button */}
        {/* Add your game button icon or text here */}
        <Image
          source={require("../assets/images/trophy.png")}
          style={styles.image}
        />
      </TouchableOpacity>

      <MainTennisButton />

      <TouchableOpacity style={styles.button}>
        {/* News button */}
        {/* Add your game button icon or text here */}
        <Image
          source={require("../assets/images/news.png")}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          source={require("../assets/images/icons8-male-user-96.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: theme.white,
    elevation: 4,
    boxShadow: "rgba(0, 0, 0, 0.25) 1px 6px 20px",
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  roundButton: {
    borderRadius: 24,

    elevation: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Toolbar;
