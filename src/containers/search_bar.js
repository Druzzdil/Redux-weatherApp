import React, { Component } from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchWeather from '../actions/index';

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
        this.handleChange  = this.handleChange .bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }



handleChange(event){
    this.setState({term: event.target.value});
    console.log(event.target.value)
}

handleFormSubmit(e){
    e.preventDefault()
    // this.setState({term: event.target.value});
    console.log('ok')
}


  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
            <div className="form-group">
            <label className="control-label col-sm-2" >Search</label>
            <div className="col-sm-10">          
                <input type="text" className="form-control"  value={this.state.term} onChange={this.handleChange} placeholder="get the 5 day forecast in your area"/>
            </div>
            </div>
            <div className="form-group">        
            <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Submit</button>
            </div>
            </div>
        </form>
      </div>
    );
  }
}
