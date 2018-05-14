import React, { Component } from 'react';
import Recording from './recording_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="background-style">
          <div className="osmosis-heading">
            <h1>Os</h1>
          </div>
        </div>
        <div className="subheading">
              Recording Agreement
        </div>
        <Recording />
      </div>
    );
  }
}
