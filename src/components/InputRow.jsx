import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputRow extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    rowFunction: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    inputRef: PropTypes.ref, // ?
    onKeyUp: PropTypes.func
  };

  static defaultProps = {
    type: "text"
  };

  handleOnChange = event => {
    // this.setState({ userInput: event.target.value });
    this.props.onInputChange(event.target.value);
  };

  render() {
    return (
      <div className="form-group row">
        <label
          htmlFor={this.props.rowFunction}
          className="col-sm-1 col-form-label"
        >
          {this.props.rowFunction}
        </label>
        <div className="col-sm-3">
          <input
            onKeyUp={this.props.onKeyUp}
            ref={this.props.inputRef}
            value={this.props.value}
            onChange={this.handleOnChange}
            type={this.props.type}
            className="form-control"
            id={this.props.rowFunction}
            placeholder={this.props.rowFunction}
          />
        </div>
      </div>
    );
  }
}
