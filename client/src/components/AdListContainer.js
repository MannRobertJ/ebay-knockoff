import React, { Component } from "react";
import { connect } from "react-redux";
import AdList from "./AdList";
import { fetchAds } from "../actions/ads";

class AdListContainer extends Component {
  state = { ads: [1, 2, 3, 4] };

  componentDidMount() {
    this.props.fetchAds();
  }

  render() {
    return <AdList ads={this.props.ads} />;
  }
}

const mapStateToProps = state => ({
  ads: state.ads
});

export default connect(
  mapStateToProps,
  { fetchAds }
)(AdListContainer);
