import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchWeather } from "../actions/index";
// import weather from '../reducers/index';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        weather: []
    }
  }

renderWeather(cityData){
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    console.log(temps)
    return (
        <tr key={name}>
            <td>{name}</td>
            <td>
              <Chart data={temps} color="orange" />
            </td>
        </tr>
    );
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