import React, { Component } from "react";


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    console.log(this);
    this.setState({
      date: new Date()
    });
  };

  render() {
    return (
      <div className="clock">
        <h1>Hello World!</h1>
        <p className="clockDate">
          The date is: <b>{this.state.date.toLocaleDateString()}</b>
        </p>
        <p className="clockTime">
          The time is: <b>{this.state.date.toLocaleTimeString()}</b>
        </p>
      </div>
    );
  }
}

export default Clock;
