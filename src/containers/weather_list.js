import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchWeather } from "../actions/index";
// import weather from '../reducers/index';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import { dune } from '../reducers/x';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        weather: []
    }
  }
componentDidMount() {
   return dune();
}

renderWeather(cityData){
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    console.log(temps)
    return (
        <tr key={name}>
            <td>{name}</td>
            <td>
              <Chart data={temps} color="orange" units="K" />
            </td>
            <td>
              <Chart data={pressure} color="blue" units="hPa" />
            </td>
            <td>
              <Chart data={humidity} color="black" units="%" />
            </td>
        </tr>
    );
}

render() {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
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