import React, { Component } from "react";
import PropTypes from "prop-types";

class LoginSection extends Component {
    render() {
        return (
            <div className="LoginSection">
                <h1 className="welcomeTitle">Welcome</h1>
                <UserInputField />
            </div>
        );
    }
}

class UserInputField extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: true, username: "", password: "" };
        this.textInput = React.createRef();
    }

    authenticateUser() {
        if (this.state.username === "Admin") {
            if (this.state.password === "Admin") {
                return alert("Hi Admin!");
                // 1 Should we return enum?
            } else {
                return alert("Invalid Password");
            }
        } else {
            return alert("No Such User");
        }
    }

    handleSubmit = event => {
        this.authenticateUser();
        event.preventDefault();
    };

    handlePasswordChange = userInput => {
        this.setState({ password: userInput });
    };

    handleUsernameChange = userInput => {
        this.setState({ username: userInput });
    };

    focus() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputRow
                    ref={this.textInput}
                    onInputChange={this.handleUsernameChange}
                    rowFunction="UserName"
                    autoFocus={true}
                    value={this.state.username}
                    onSubmitEditing={}
                />
                <InputRow
                    ref={(input) => { this.secondTextInput = input; }}
                    value={this.state.password}
                    onInputChange={this.handlePasswordChange}
                    rowFunction="Password"
                    type="password"
                />

                <input
                    className="btn btn-success col-sm-1"
                    type="submit"
                    value="submit"
                />

                <div
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
        </div>
            </form>
        );
    }
}

class InputRow extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        rowFunction: PropTypes.string.isRequired,
        onInputChange: PropTypes.func.isRequired,
        type: PropTypes.string
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

export default LoginSection;
