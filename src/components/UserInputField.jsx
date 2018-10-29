import React, { Component } from "react";
import InputRow from "./InputRow";
import { NavLink } from "react-router-dom";

export default class UserInputField extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true, username: "", password: "" };
    this.textInput = React.createRef();
  }

  handleSubmit = event => {
    // return event.preventDefault();
    if (this.state.username === "Admin") {
      if (this.state.password === "Admin") {
        return true;
      } else {
        alert("Invalid Password");
        event.preventDefault();
      }
    } else {
      alert("No Such User");
      event.preventDefault();
    }
  };

  handlePasswordChange = userInput => {
    this.setState({ password: userInput });
  };

  handleUsernameChange = userInput => {
    this.setState({ username: userInput });
  };

  // HANDLE TEXT ENTER

  handleKeyUsername = e => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      //32 space 13
      this.focusTextInput();
      e.preventDefault();

      //   alert("HELLO");
    }
  };

  focusTextInput = () => {
    this.textInput.current.focus();
  };
  handleFormSubmit = event => {
    event.preventDefault();
    return false;
  };

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <InputRow
          onInputChange={this.handleUsernameChange}
          rowFunction="UserName"
          value={this.state.username}
          onKeyUp={this.handleKeyUsername}
        />
        <InputRow
          inputRef={this.textInput}
          value={this.state.password}
          onInputChange={this.handlePasswordChange}
          rowFunction="Password"
          type="password"
          onKeyUp={this.handleKeyPassword}
        />
        <NavLink
          className="btn btn-success col-sm-1"
          onClick={this.handleSubmit}
          to="/main"
        >
          Submit
        </NavLink>

        {/* <div
          className="alert alert-warning alert-dismissible fade hide"
          role="alert"
        >
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </div> */}
      </form>
    );
  }
}
