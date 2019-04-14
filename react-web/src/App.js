import React, { Component } from 'react';
import './App.css';
import Appbar from './components/appbar'
import Search from './Container/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <Search />
      </div>
    );
  }
}

export default App;
