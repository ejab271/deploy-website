import React, { Component } from "react";
import { Element } from "react-scroll";
import logo from "../images/logo.svg";

class Home extends Component {
  render() {
    return (
      <Element id="home" name="home">
        <header className="App-header">
         
          <div className="App-Background" >
            <p>Hi there!</p>
            <p>My Name is Elliot Barry.</p>
          </div>
         
        </header>
      </Element>
    );
  }
}

export default Home;
