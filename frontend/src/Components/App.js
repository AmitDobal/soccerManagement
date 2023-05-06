import "./App.css";
import React from "react";
import PlayerForm from "./Player/PlayerForm";
import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
import { PlayerCard } from "./PlayerCard";
import axios from "axios";
import NavBar from "./PageComponents/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.fetchAllPlayers = this.fetchAllPlayers.bind(this);
  }

  componentDidMount() {
    this.fetchAllPlayers();
  }

  fetchAllPlayers = async () => {
    try {
      const URL = "http://localhost:3001/players";
      const players = await axios.get(URL);
      console.log("PLAYERS: ", this.state);
      this.setState({
        players: players.data,
      });
    } catch (err) {
      console.log("ERROR!!!!!!!!!!!!!: ", err.message);
    }
  };

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingle player={this.state.currentPlayer} />
          </div>
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
