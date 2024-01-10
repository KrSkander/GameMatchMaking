import React from "react";

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
    <div id="games-list">
      {games.map((game) => (
        <div key={game.id}>
          <h3>{game.name}</h3>
          <p>Players: {game.players}</p>
          <button onClick={() => joinGame(game.id)}>Join Game</button>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
