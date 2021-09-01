import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Body from './components/body';

export class App extends Component {
  render() {
    return (
        <div className="fixedContainer">
          <Body/>
        </div>
    )
  }
}

export default App;
