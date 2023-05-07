import React from "react";

function PlayerSingle(props) {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img
              alt="Soccer"
              src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg"
            />
            <span className="card-title">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className="card-content">
            <div className="row">
              <div className="col s6">
                <p>Phone: {props.player.phone}</p>
              </div>
              <div className="col s6">
                <p>Email: {props.player.email}</p>
              </div>
              <div className="row">
                <div className="col s6">
                  <p>Strength: {props.player.strength}</p>
                </div>
                <div className="col s6">
                  <p>Endurance: {props.player.endurance}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-action">Team: {props.player.team}</div>
        </div>
      </div>
    </div>
  );
}

export default PlayerSingle;
