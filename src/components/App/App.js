import React, {Component} from 'react';
import './App.css';
import Main from '../Main';
import "whatwg-fetch";
import {Link} from "react-router-dom"




class  App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-tittle">
          <Link to={``}>
             Welcome to TV Series Shows
          </Link>
         
        </h2>
      </header>
       <Main />
    </div>
  )
  }
}

export default App;
