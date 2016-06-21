const React = require('react');
const Tile = require('./tile');

var Board = React.createClass({
  render() {
    return (
      <div className="board">
        {this.props.mboard.grid.map((row, idx1) => {
          return <div key={idx1} className="row">{row.map((tile, idx2) => {
              return <Tile key={idx2} tile={tile} update={this.props.update}></Tile>;
            })}</div>;
        })}
      </div>
    );
  }
});

module.exports = Board;
