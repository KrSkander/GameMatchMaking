import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./Views/HomePage";
import ProfilePage from "./Views/ProfilePage";
import Toolbar from "./Components/Toolbar";
import StubbornButton from "./Components/StubbornButton";
import GamesList from "./Views/GamesList";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="News" component={HomePage} />
            <Stack.Screen name="Profile" component={ProfilePage} />
            <Stack.Screen name="Games" component={GamesList} />
            {/* Add more screens as needed */}
          </Stack.Navigator>

          {/* <View style={styles.buttonsContainer}>
          <StubbornButton />
        </View> */}

          <View style={styles.toolbarContainer}>
            <Toolbar />
          </View>
        </View>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 70,
    right: 10,
    flex: 1,
  },
  toolbarContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});

export default App;
