import React, { Component } from 'react';
import earthquakes from '../data/earthquakes';
import EarthquakeInfo from './EarthquakeInfo';
import '../styles/App.css';

class EarthquakeList extends Component {
  render() {
    const earthquakeList = earthquakes.features;
    return (
      <div className='quake-list'>
        {earthquakeList.map((quake, index) =>
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
