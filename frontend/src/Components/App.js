import "./App.css";
import React from "react";
import PlayerForm from "./Player/PlayerForm";
import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
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
    this.addPlayer = this.addPlayer.bind(this);
  }

  componentDidMount() {
    this.fetchAllPlayers();
  }

  fetchAllPlayers = async () => {
    try {
      const URL = "http://localhost:3001/players";
      const players = await axios.get(URL);
      // console.log("PLAYERS APP.js FETCH : ", this.state);
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
  addPlayer(item) {
    console.log("APP.jS addPlayer item: ", item);
    const players = this.state.players;
    console.log("APP.jS players: ", players)
    players.push(item);
    console.log("APP.jS addPlayer players: ", players)
    this.setState({
      players,
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <div className="col s4">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className="col s8">
            <PlayerSingle player={this.state.currentPlayer} />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm addPlayer={this.addPlayer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
