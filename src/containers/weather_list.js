import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchWeather } from "../actions/index";
// import weather from '../reducers/index';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        weather: [],
        name: []
    }
  }

renderWeather(cityData){
    const name = cityData.city.name
    return (
        <tr key={name}>
            <td>{name}</td>
        </tr>
    )
    console.log(localStorage.setItem(), 'ttttttttttttttt')
}


render() {
    console.log(this.props.weather);
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        </div>
    )
  }
}


function mapStateToProps({weather}) { 
   return {weather};
}

export default connect(mapStateToProps)(WeatherList);