import React, { Component } from "react";
import { connect } from "react-redux";
import AdList from "./AdList";
import { fetchAds } from "../actions/ads";
import { noAd } from "../actions/ad";

class AdListContainer extends Component {
  state = { title: "", description: "", soldStatus: false, pictureUrl: "" };

  componentDidMount() {
    this.props.noAd();
    this.props.fetchAds();
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("hello?");
    const data = this.state;
    console.log(data);
    this.props.updateAd(Number(this.props.match.params.id), data);
  };

  render() {
    return <AdList ads={this.props.ads} />;
  }
}

const mapStateToProps = state => ({
  ads: state.ads
});

export default connect(
  mapStateToProps,
  { fetchAds, noAd }
)(AdListContainer);
