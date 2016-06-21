const React = require('react');
const ReactDOM = require('react-dom');
const Game  = require('./components/game.jsx');

const MineSweeper = React.createClass({
  render() {
    return <div>
      <Game/>
    </div>;
  }
});


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<MineSweeper/>, document.getElementById('main'));
});
