import React, { Component } from "react";
import { connect } from "react-redux";
import AdList from "./AdList";
import { fetchAds, createAd } from "../actions/ads";
import { noAd } from "../actions/ad";
import AdForm from "./AdForm";

class AdListContainer extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    soldStatus: false,
    pictureUrl: ""
  };

  componentDidMount() {
    this.props.noAd();
    this.props.fetchAds();
  }

  stringToBool = str => {
    return str === "true" ? true : false;
  };

  onChange = event => {
    if (event.target.type === "checkbox") {
      this.setState({ soldStatus: !this.state.soldStatus });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  onSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log(data);
    this.props.createAd(data);
  };

  render() {
    return (
      <div>
        <AdList ads={this.props.ads} />
        <AdForm
          ad={this.state}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ads: state.ads,
  jwt: state.jwt
});

export default connect(
  mapStateToProps,
  { fetchAds, noAd, createAd }
)(AdListContainer);
