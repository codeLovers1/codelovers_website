import React, { Component } from 'react';
import './App.css';

import { NavigationBar, Logo } from './components/Common';
import Meetups from './components/Meetups/Meetups';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <header className="App-header">
          <Logo logoSpin="App-logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Meetups />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
