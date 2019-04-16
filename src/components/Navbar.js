import React, { Component } from "react";
import fcc from "./fcc.svg";

class Navbar extends Component {
  render() {
    return (
      <div id="nabvar">
        <img src={fcc} width="60" height="60" />
        <h1>{this.props.name} </h1>
      </div>
    );
  }
}

export default Navbar;
