const React = require('react');
const MineSweeper = require('../minesweeper');

var Tile = React.createClass({
  handleClick(event) {
    const reveal = !event.altKey;
    this.props.update(this.props.tile, reveal);
  },
  handleRightClick(event) {
    event.stopPropagation();
    event.preventDefault();

    this.props.update(this.props.tile, false);
    return false;
  },
  render() {
    let tileText = "";
    let tileClass = "tile";
    let style = {};
    const ctile = this.props.tile;
    if (ctile.explored) {
      tileText = ctile.adjacentBombCount();
      style.color = `hsl(${90 * tileText}, 80%, 30%)`;
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


    return <div onClick={this.handleClick}
                onContextMenu={this.handleRightClick}
                className={tileClass}
                style={ style }>{tileText}</div>;
  }
});

module.exports = Tile;
