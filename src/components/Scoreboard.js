import React, { Component } from "react";
import "./Scoreboard.css";
import Player from "./Player";
import AddPlayer from "./AddPlayer";

export default class Scoreboard extends Component {
  state = {
    players: [
      { id: 1, name: "Gino", score: 11 },
      { id: 2, name: "Saurus", score: 14 },
      { id: 3, name: "Rex", score: 4 }
      // { id: [], name: [""], score: [] }
    ]
  };

  addPlayer = name => {
    const player = {
      // generate random id number for new player:
      id: Math.round(Math.random() * 100000),
      name,
      score: 0
    };
    this.setState({
      players: this.state.players.concat(player) // add new player to players list
    });
  };

  renderPlayer = player => {
    return (
      <Player
        id={player.id}
        name={player.name}
        score={player.score}
        key={player.id}
        incrementScore={this.incrementScoreOfPlayer}
        // OR: incrementScore={() => this.incrementScoreOfPlayer(player.id)}
        // ~ circumvents the whole callback inception, allows for more functions
        // now: button in Players.js is: {this.props.incrementScore}
      />
    );
  };
  // callback function to increment score:
  incrementScoreOfPlayer = calledId => {
    // Update `this.state.players` so that the player with this id get his/her score incremented
    const updatedPlayers = this.state.players.map(player => {
      if (player.id === calledId) {
        return { ...player, score: player.score + 1 }; // copy player, but update their score
      } else {
        return player;
      }
    });
    this.setState({ players: updatedPlayers });
  };

  render() {
    // copying the array of players because `.sort()` mutates
    const players_copy = [...this.state.players];
    // sorting the players
    players_copy.sort((a, b) => b.score - a.score);
    // console.log(players_copy)

    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>{players_copy.map(this.renderPlayer)}</ul>
        <h1>Add new player:</h1>
        <AddPlayer addPlayer={this.addPlayer} />
      </div>
    );
  }
}

// Lifting state up
// This decision to manage the scores of the players in the scoreboard component
// instead of in the player components is what we call lifting state up.
// If you imagine the (upside down) tree structure the of components,
// we are "lifting up" the state to the least level at which we need to know
// about that data. In this case, we figured we need to know about the scores
// in the scoreboard component, and hence we "lift that information up" to it,
// rather than managing the scores in the <Player> components.
