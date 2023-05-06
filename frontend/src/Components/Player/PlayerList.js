import React from "react";

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Players</h4>
          </li>
          {this.props.players.map((item) => (
            <a
              className="collection-item"
              href="#!"
              key={item._id}
              onClick={this.props.updateCurrentPlayer.bind(this, item)}
            >
              {item.firstName} {item.lastName}
            </a>
          ))}
        </ul>
      </div>
    );
  }
}

export default PlayerList;
