import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { VStack, Stack, Center, Button } from "native-base"; // Import VStack from Native Base
import Theme from "../Theme/Theme";

// Dummy data representing the list of games
const games = [
  { id: 1, name: "Game 1", players: 2 },
  { id: 2, name: "Game 2", players: 4 },
  { id: 3, name: "Game 3", players: 1 },
  { id: 4, name: "Game 4", players: 3 },
];

const GamesList = () => {
  // Function to join a game
  const joinGame = (gameId) => {
    // Code to join the game with the given gameId
    console.log(`Joining game with ID ${gameId}`);
  };

  return (
    <VStack mt={4} px={4} space={4} alignItems={"flex-start"} width={1}>
      {games.map((game) => (
        <Center
          key={game.id}
          w="64"
          h="20"
          bg="indigo.100"
          rounded="xl"
          borderWidth={"0.5"}
          shadow={"none"}
          style={styles.GameCard}
        >
          <Stack
            style={styles.Content}
            direction="row"
            mb="2.5"
            mt="1.5"
            space={3}
          >
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 20 }}>{game.name}</Text>
              <Text>Players: {game.players}</Text>
            </View>
            <Button style={styles.Button} onPress={() => joinGame(game.id)}>
              Join
            </Button>
          </Stack>
        </Center>
      ))}
    </VStack>
  );
};

const styles = StyleSheet.create({
  GameCard: {
    minWidth: 325,
    borderColor: "white",
  },
  Content: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
  },
  Button: {
    borderRadius: 50,
    width: 100,
    height: 40,
  },
});
export default GamesList;
