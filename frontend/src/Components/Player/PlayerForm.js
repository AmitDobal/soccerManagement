import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      player:{}
    }
  }
  async submitPlayer(event) {
    event.preventDefault();
    try {
      const URL = "http://localhost:3001/players";
      const input = event.target;
      const insertData = {
        firstName: input.firstName.value,
        lastName: input.lastName.value,
        phone: input.phone.value,
        email: input.email.value,
      };
      await axios.post(URL, insertData);
      console.log("PlayerFOrm SubmitPlayer: ",this.props)
      this.props.addPlayer(insertData)
    } catch (error) {
      console.log("Player Form CLIENT ERROR: ", error);
    }
  }
  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new Player</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" type="text" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" type="text" />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="phone" type="text" />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input ref={this.inputRef} id="email" type="text" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add Player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
