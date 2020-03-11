import React from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Scoreboard />
        </main>
      </div>
    );
  }
}

// The scoreboard displays multiple players with a name and score
// Users can change the score of each player
// Players are automatically sorted by score
// Users can add new players to the game
