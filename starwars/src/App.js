import React, { Component } from 'react';
import './App.css'; 
import CharList from "./components/CharList";
import PaginationExampleCompact from "./components/Pagination";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [], 
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className = "starwars">
          <h1 className="Header">React Wars</h1>
          <div className = "character-cards">
            <CharList className = "character-list" list = {this.state.starwarsChars} />
          </div>
          <div style="text-align:center;">
    <input type="button" id="first" onclick="firstPage()" value="first" />
    <input type="button" id="next" onclick="nextPage()" value="next" />
    <input type="button" id="previous" onclick="previousPage()" value="previous" />
    <input type="button" id="last" onclick="lastPage()" value="last" />

    <div id="list"></div>
    </div>
       </div>
      </div>
    );
  }
}

export default App;