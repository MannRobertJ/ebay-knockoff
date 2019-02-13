import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/login";

class LoginForm extends Component {
  state = { email: "", password: "" };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const data = this.state;
    this.setState = { email: "", password: "" };
    this.props.login(data);
  };

  render() {
    return (
      <div>
        <form id="loginForm" onSubmit={this.onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="type email here"
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="type password here"
            value={this.state.password}
            onChange={this.onChange}
          />
        </form>
        <button type="submit" form="loginForm" value="Submit">
          {" "}
          Submit
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginForm);
