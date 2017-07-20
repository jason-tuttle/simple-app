import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeList from './EarthquakeList';

class App extends Component {
  render() {
    return (
      <div className='title'>
        <div className='my-header'>Earthquake!</div>
        <div className="earthquake-title">This is a list of 8 Earthquakes occurring on the morning of July 14th across the United States.</div>
        <EarthquakeList />
      </div>
    );
  }
}

export default App;
