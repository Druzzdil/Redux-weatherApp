import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import { connect } from "react-redux";
// import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine   } from 'react-sparklines';
import _ from 'lodash';
export default class App extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList/>
      </div>
    );
  }
}

