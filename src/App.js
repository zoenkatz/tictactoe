import React,{Component} from 'react';
import './App.css';
import Box from './components/Box';
import ChoosePlayer from './components/ChoosePlayer';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      board: Array(9).fill(null),
      player: null,
      winner: null
    }
  }

  checkWinner() {
    let winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let index = 0; index < winLines.length; index++){
      const [a,b,c] = winLines[index];

      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        this.setState({
          winner: this.state.player
        });
        setTimeout(() =>{
          alert("You won");
        }, 0)

      }
    }
  }

  setPlayer(player){
    this.setState({player})
  }

  handleBoxClick(e,index){
    console.log(index);
    let newBoard = this.state.board;

    if(this.state.player && !this.state.winner && !this.state.board[index]) {
        newBoard[index] = this.state.player;

        this.setState({
          board: newBoard,
          player: this.state.player === 'x' ? 'o' : 'x'
        });

      this.checkWinner();
    }


  }

  render() {
    const board = this.state.board.map((item, index) => {
      return(
      <Box
          key={index}
          index={index}
          board={this.state.board}
          player={this.state.player}
          handleBoxClick={(e, index) => this.handleBoxClick(e, index)}
      />
      )});

    let playerStatus = this.state.player ? <h2>Next player is {this.state.player}</h2> : <ChoosePlayer player={(e) => this.setPlayer(e)}/>;

    return (
        <div className="container">
          <h1>Tic Tac Toe App</h1>
          {playerStatus}
          <div className="board">
            {board}
          </div>
        </div>
    )
  }
}

export default App;
