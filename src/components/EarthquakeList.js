import React, { Component } from 'react';
import earthquakes from '../data/earthquakes';
import EarthquakeInfo from './EarthquakeInfo';
import 'whatwg-fetch';
import '../styles/App.css';

class EarthquakeList extends Component {
  constructor(props) {
    super(props);
    this.state = {quakeData: []};
  }
  componentDidMount() {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
      .then(response => response.json())
      .then(data => this.setState({quakeData: data.features}));
  }
  render() {
    const {quakeData} = this.state;
    console.log(quakeData);
    return (
      <div className='quake-list'>
        {quakeData.map((quake, index) =>
          <EarthquakeInfo
            key={index}
            quake={quake}
          />
        )}
      </div>
    )
  }

}

export default EarthquakeList;
