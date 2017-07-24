import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchWeather } from "../actions/index";
// import weather from '../reducers/index';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

  }
componentDidMount() {
    new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
    });
}

 
render() {
    return (
        <div ref="map">

        </div>
        )
    }
}




export default GoogleMap