import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './gif.jsx';

class SelectedGif extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="selected-gif">
          <Gif id={this.props.gifId}/>
        </div>
      </div>
    );
  }
}

export default SelectedGif;
