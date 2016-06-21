const React = require('react');
const MineSweeper = require('../minesweeper');

var Tile = React.createClass({
  handleClick(event) {
    const reveal = !event.altKey;
    this.props.update(this.props.tile, reveal);
  },
  render() {
    let tileText = "";
    let tileClass = "tile";
    const ctile = this.props.tile;
    if (ctile.explored) {
      tileText = ctile.adjacentBombCount();
      if (tileText === 0) tileText = "";
      tileClass += " revealed";
      if (ctile.bombed) {
        tileText = "💣";
        tileClass += " bombed";
      }
    }
    if (ctile.flagged) {
      tileText = "🚩";
      tileClass += " flagged";
    }


    return <div onClick={this.handleClick} className={tileClass}>{tileText}</div>;
  }
});

module.exports = Tile;
