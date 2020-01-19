import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar.jsx';
import SelectedGif from './selectedGif.jsx';
import GifList from './gifList.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [
        {id: "KCjjKvyEjVSiA6mKSe"},
        {id: "mNf9NcEI1jZW8"}
      ],
      selectedGifId: "1APaqOO5JHnWKLc7Bi"
    }

    this.search("homer")
  }

  search = (query) => {
    giphy('DKdzlTD6NVJb2efkesfvc6oaVD9f5wJF').search({
        q: query,
        rating: 'g',
        limit: 30
    }, (err, res) => {
        // Res contains gif data!
        this.setState({
          gifs: res.data
        });
    });
  }

  updateSelected = (id) => {
    this.setState({
      selectedGifId: id
    })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <SelectedGif gifId={this.state.selectedGifId}/>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateSelected={this.updateSelected}/>
        </div>
      </div>
    );
  }
}

export default App;
