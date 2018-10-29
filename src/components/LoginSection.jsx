import React, { Component } from "react";
import UserInputField from "./UserInputField";

export default class LoginSection extends Component {
  render() {
    return (
      <div className="LoginSection">
        <h1 className="welcomeTitle">Welcome</h1>
        <UserInputField />
      </div>
    );
  }
}
