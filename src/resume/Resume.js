import React, { Component } from "react";
import { Element } from "react-scroll";

class Resume extends Component {
  render() {
    return (
      <Element id="resume" name="resume">
        <div className="App-about">
          <h2>Résumé</h2>
          <p>
            Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
            Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est,
            eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>

          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.s</p>
        </div>
      </Element>
    );
  }
}

export default Resume;
