import React, { Component } from 'react';
import './App.css';
import Navigation from './components/bottomnavigation'
import Appbar from './components/appbar'
import Slider from './components/cardslider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <Slider />
        <Navigation/>
      </div>
    );
  }
}

export default App;
