import React, { Component } from "react";
import AdList from "./AdList";

export default class AdListContainer extends Component {
  state = { ads: [1, 2, 3, 4] };

  render() {
    return <AdList ads={this.state.ads} />;
  }
}
