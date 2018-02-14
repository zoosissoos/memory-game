import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Score from './Score';

//sets style for game grid
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridList: {
    width: 700,
    height: 630,
  },
};

//game tile data
const tilesData = [
  {
    id: 0,
    img: './images/tywin.jpg',
    name: 'tywin'
  },
  {
    id: 1,
    img: './images/johnsnow.jpg',
    name: 'johnsnow'
  },
  {
    id: 2,
    img: './images/sansa.jpg',
    name: 'sansa'
  },
  {
    id: 3,
    img: './images/ygritte.jpg',
    name: 'ygritte'
  },
  {
    id: 4,
    img: './images/whitewalker.jpg',
    name: 'whitewalker'
  },
  {
    id: 5,
    img: './images/cersi.jpg',
    name: 'cersi'
  },
  {
    id: 6,
    img: './images/tyrion.jpg',
    name: 'tyrion'
  },
  {
    id: 7,
    img: './images/daenerys.jpg',
    name: 'daenerys'
  },
  {
    id : 8,
    img: './images/thehound.jpg',
    name: 'thehound'
  },
  {
    id : 9,
    img: './images/arya.jpg',
    name: 'arya'
  },
  {
    id : 10,
    img: './images/ned.jpg',
    name: 'ned'
  },
  {
    id : 11,
    img: './images/joffrey.jpg',
    name: 'joffrey'
  },
];

class GameGrid extends Component {
  state =  {
    tiles: [],
    alreadySelected: [],
    correct: 0,
    highScore: 0
  }
  //sets state when component mounts
  componentDidMount() {
    this.setState({tiles: tilesData});
  }

  //handles user guesses by checking to see if the item is already in the state's alreadyGuessed
  guess = (id) =>{
    let preSelect = this.state.alreadySelected.slice();
    console.log(`preSelect: ${preSelect}`)  
    if(preSelect.includes(id)){
      this.newGame();
    }else{
      preSelect.push(id)
      console.log(`preSelect after pushing: ${preSelect}`) 
      this.setState({
        correct: this.state.correct + 1,
        alreadySelected: preSelect
      })
      this.nextSetup();
    };
  };

  //function that randomizes the next selection
  nextSetup = () => {
    let toShuffle = this.state.tiles;
    let currentIndex = toShuffle.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = toShuffle[currentIndex];
      toShuffle[currentIndex] = toShuffle[randomIndex];
      toShuffle[randomIndex] = temporaryValue;
    }

    this.setState({tiles:toShuffle});
  }

  //sets up a new round
  newGame = () => {
    let newGuess = [];
    let newCorrect = 0;
    let curHigh = this.state.highScore;
    let curCorrect = this.state.correct;
    if(curHigh<curCorrect){
      this.setState({
        tiles: tilesData,
        alreadySelected: newGuess,
        correct: newCorrect,
        highScore: curCorrect
      })
    }else{
      this.setState({
        tiles: tilesData,
        alreadySelected: newGuess,
        correct: newCorrect
      })
    }
  }

  render() {
    return (
      <div className = "container">
        <Score current={this.state.correct} high = {this.state.highScore}/>
        <div className = "row">
          <div className = "col-1">
          </div>
          <div className = "col-10">
            <div style={styles.root}>
              <MuiThemeProvider>
            < GridList
                cellHeight={160}
                style={styles.gridList}
                cols = {4}
                padding= {25}
            >
              {this.state.tiles.map((tile) => (
                <GridTile key={tile.id} onClick={() => this.guess(tile.id)}>
                  <img src={tile.img} alt={tile.name}/>
                </GridTile>
              ))}
              </GridList>
              </MuiThemeProvider>
            </div>
          </div>
          <div className = "col-1">
          </div>
        </div>
      </div>
    )
  }
}

export default GameGrid;