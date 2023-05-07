import axios from "axios";
import React from "react";

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    // console.log("CONSTRUCTOR PlayerList", this.props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    // console.log("COMPONENT DID MOUNT OF PlayerList: ", this.props.players);
    // this.setState({
    //   players: this.props.players
    // })
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("COMPONENT did UPDATE OF PlayerList: ", this.props.players);
    // console.log(prevState.players !== this.state.players);
    // console.log("PREVOIS STATE", prevState.players);
    // console.log("THIS STATE", this.state.players);
    if (prevState.players !== this.props.players) {
      // console.log("------------------------------------------------");
      this.setState({
        players: this.props.players,
      });
    }
  }
  async handleDelete(item, event) {
    // console.log("CLICKED");
    // console.log("item", item._id);
    // console.log("Event", event);
    try {
      const URL = `http://localhost:3001/player/${item._id}`;
      const alert = window.confirm("Are you sure want to delete this");
      // console.log("WINDOW ALERT RESPONSE:", alert);
      if (alert === true) {
        const response = await axios.delete(URL);
        const players = this.state.players;
        // console.log("PLAYERS In handleDelete: ", players);
        const index = players.findIndex((obj) => obj._id === item._id);
        if (index > -1) {
          players.splice(index, 1);
          // console.log("SPLICE THE PLAYER", players);
          this.setState({
            players,
          });
        }
        // console.log("RESPONSE AFTER DELETE: ", response);
      }
    } catch (error) {
      console.log("ERROR DURING DELETE, CLIENT:", error.message);
    }
  }
  async handleUpdate(item, event) {
    console.log("UPDATE")
  }
  handleAdd(player){
    let players = this.state.players;
    players.push(player);
    this.setState({
      players
    })
  }

  render() {
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Players</h4>
          </li>
          {/* {console.log("PlayerLIst RENDER method: ", this.props.players)} */}
          {this.state.players.map((item) => (
            <div key={item._id}>
              <div className="row">
                <div className="col s6">
                  <a
                    className="collection-item"
                    href="#!"
                    key={item._id}
                    onClick={this.props.updateCurrentPlayer.bind(this, item)}
                  >
                    {item.firstName} {item.lastName}{" "}
                  </a>
                </div>
                <div className="col s3">
                  <button
                    className="btn red darken-3  waves-effect waves-light"
                    onClick={this.handleDelete.bind(this, item)}
                  >
                    Delete
                  </button>
                </div>
                <div className="col s3">
                  <button
                    className="btn  teal darken-1  waves-effect waves-light"
                    onClick={this.handleUpdate.bind(this, item)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default PlayerList;
