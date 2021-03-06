import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nabvar from "./components/Navbar";
import Main from "./components/main/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nabvar name="freeCodeCamp Markdown Previewer" />
        <Main />
      </div>
    );
  }
}

export default App;

/* <header className="App-header">
{<img src={logo} className="App-logo" alt="logo" />}
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */
