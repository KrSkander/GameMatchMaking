import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfilePage = ({ navigation }) => {
  const username = "PoTato";
  const tennisLevel = "Intermediate";
  const profilePicture = require("../assets/images/icons8-male-user-96.png");

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profilePicture} style={styles.profilePicture} />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.tennisLevel}>{tennisLevel}</Text>
      </View>
      <View style={styles.extraSpace}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  tennisLevel: {
    fontSize: 18,
    color: "#666",
  },
  extraSpace: {
    flex: 1,
  },
});

export default ProfilePage;
