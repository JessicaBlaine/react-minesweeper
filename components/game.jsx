const React = require('react');
const Board = require('./board.jsx');
const MineSweeper = require('../minesweeper.js');

const Game = React.createClass({
  getInitialState() {
    return {board: new MineSweeper.Board(20, 40)};
  },
  updateGame(tile, reveal) {
    if (reveal){
      tile.explore();
    } else {
      tile.toggleFlag();
    }
    this.setState({board: this.state.board});
  },
  restartGame() {
    this.setState({board: new MineSweeper.Board(20, 60)});
  },
  render() {
    let modal;
    if (this.state.board.won() || this.state.board.lost()){
      const message = this.state.board.won() ? "You've won!" : "You've lost.";
      modal =
        <div className='modal-screen'>
          <div className='modal-content'>
            <p>{message}</p>
            <button onClick={this.restartGame}>Play Again</button>
          </div>
        </div>;
    }
    return <div>
      {modal}
      <span>💣s left: {this.state.board.bombsRemaining}</span>
      <Board mboard={this.state.board} update={this.updateGame}></Board>
    </div>;

  }
});

module.exports = Game;
