import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Gif extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = (event) => {
    this.props.updateSelected(this.props.id);
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return (
        <img src={src} className="gif" onClick={this.handleClick}></img>
    );
  }
}

export default Gif;
