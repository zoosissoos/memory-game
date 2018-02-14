import React, { Component } from 'react';
import './App.css';
import GameGrid from './components/GridList';
import Nav from './components/Nav';
import Welcome from './components/Welcome';


class App extends Component {
  render() {
    return ( 
      <div>
        <Nav/>
        <Welcome/>
        <GameGrid/>
      </div>  
    );
  }
}

export default App;
