import React, { Component } from 'react';
import moment from 'moment';

class EarthquakeInfo extends Component {

  render() {
    const {key, quake} = this.props;

    return (

      <div className="col-sm-6" key={key}>
        <div className="card" >
          <div className="card-block">
            <h4 className="card-title">{quake.properties.place}</h4>
            <h6 className="card-subtitle mb-2 text-muted">Magnitude: {quake.properties.mag}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Time: {moment(quake.properties.time).format('llll')}</h6>
            <p className="card-text">Coordinates: {quake.geometry.coordinates.join(', ')}</p>

            <a href={quake.properties.url} className="card-link">USGS Event Link</a>

          </div>
        </div>
      </div>
    );
  }

}

export default EarthquakeInfo;
