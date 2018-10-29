import React, { Component } from "react";
import Clock from "./Clock";
import ChatThread from "./ChatThread";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Clock />
        <ChatThread />
      </>
    );
  }
}

export default Main;
