import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import AdListContainer from "./components/AdListContainer";
import AdDetailsContainer from "./components/AdDetailsContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={AdListContainer} />
          <Route path="/:id" exact component={AdDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
