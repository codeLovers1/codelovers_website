import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import { NavigationBar } from './components/Common';
import Meetups from './components/Meetups/Meetups';
import Header from './components/Header/Header';

// add icons to the library
library.add(faSpinner);


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Header />
        <Meetups />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
