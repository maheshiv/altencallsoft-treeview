import React, { Component } from 'react';
import './App.css';
import TreeContainer from './TreeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header App-flex-center">
          <h2>Alten Callsoft TreeNode</h2>
        </div>
        <TreeContainer />
      </div>
    );
  }
}

export default App;
