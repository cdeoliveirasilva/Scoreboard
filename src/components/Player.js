import React, { Component } from "react";
import "./Player.css";
import PropTypes from "prop-types";

export default class Player extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    incrementScore: PropTypes.func.isRequired
  };

  handleClick = () => {
    this.props.incrementScore(this.props.id);
  };

  render() {
    return (
      <div>
        <li className="player">
          <p className="name">{this.props.name}</p>
          <p className="score">{this.props.score}</p>
          <button className="plusButton" onClick={this.handleClick}>
            +
          </button>
        </li>
      </div>
    );
  }
}
