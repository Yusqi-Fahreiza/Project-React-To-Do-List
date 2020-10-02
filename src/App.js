import React, {Component} from 'react';
import './App.css';  
import List from './Components/list';
import Listy from './images/list.png';

class App extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar bg-success navbar-dark">
            <img src={Listy} alt="cart"></img>
            <a className="navbar-brand">Aplikasi To Do List</a>
        </nav>
        <div>
          <List />
        </div>
      </div>
    );
  }
}

export default App;