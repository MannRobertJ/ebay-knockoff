import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import AdListContainer from "./components/AdListContainer";
import AdDetailsContainer from "./components/AdDetailsContainer";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={AdListContainer} />
          <Route path="/:id" exact component={AdDetailsContainer} />
          <LoginForm />
        </div>
      </Provider>
    );
  }
}

export default App;
