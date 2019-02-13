import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAd, updateAd } from "../actions/ad";
import { fetchAds } from "../actions/ads";
import AdDetails from "./AdDetails";
import AdForm from "./AdForm";

class AdDetailsContainer extends Component {
  state = { title: "", description: "", soldStatus: false, pictureUrl: "" };

  componentDidMount() {
    this.props.fetchAds();
    this.props.fetchAd(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ad !== this.props.ad) {
      this.setState(this.props.ad);
    }
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

  render = () => {
    if (!this.props.ad) {
      return <p> loading... </p>;
    } else {
      return (
        <div>
          <AdDetails ad={this.props.ad} />
          <AdForm
            ad={this.state}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  };
}

// <AdForm values={this.state.ad} />

const mapStateToProps = state => ({
  ad: state.ad,
  ads: state.ads
});

export default connect(
  mapStateToProps,
  { fetchAd, fetchAds, updateAd }
)(AdDetailsContainer);
