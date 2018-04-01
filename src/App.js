import React, { Component } from 'react';
import upper, {text1,text2, text3} from "./dataStore1";
import data from "./dataStore2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{upper("please uppercase me")}</p>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{firstName}</p>
        <p>{email}</p>
              
      </div>
    );
  }
}
var person = data;
const {firstName, email} = person;


export default App;
