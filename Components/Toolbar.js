import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../Views/Theme";
import { useNavigation } from "@react-navigation/native";

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
          style={styles.profileLogo}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.roundButton]}>
        {/* Tournament button */}
        {/* Add your game button icon or text here */}
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.roundButton]}>
        {/* Game button */}
        {/* Add your game button icon or text here */}
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.roundButton]}>
        {/* News button */}
        {/* Add your game button icon or text here */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          source={require("../assets/images/icons8-male-user-96.png")}
          style={styles.profileLogo}
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
    backgroundColor: colors.white,
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
  profileLogo: {
    width: 50,
    height: 50,
  },
  createGameLogo: {
    width: 50,
    height: 50,
  },
});

export default Toolbar;
