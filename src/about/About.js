import React, { Component } from "react";
import { Element } from "react-scroll";

class About extends Component {
  render() {
    return (
      <Element id="about" name="about">
        <div className="App-about" >
          <h2>A little bit about me</h2>
          <br></br>
          <p>
          Hi, my name's Elliot Barry.
        <br></br>
        </p>
        <p>
          I'm 24 years old, I am from Ireland and I work as a software engineer. <br></br>
          I graduated from Maynooth University with a B.sc in Computer Science and Software Engineering.
        <br></br>
        </p>
        <p>
          Few things to know about me: 
          </p>
          <p>No.1:- I love photography, especially of nature. I stop to take photos whenever I see the opportunity. <br></br>
            That means currently any photos I take come from my phone but in the future <br></br>
            I'm hoping to invest more into it and use a good DSLR Camera.
            </p>

          <p>No.2:- I have become a lover of fitness, even to the point where I have bought CPD Certification Courses <br></br>
            in the areas of Personal Training and Sports Nutrition.I have set goals for myself <br></br>
            to achieve  and one such goal is to run a 10K in the future.
            </p>

            <p>No.3:- Gaming is also a huge passion of mine. I often love to play them in my free time alongside my friends. <br></br>
            I also often attend different events and sometimes even volunteer at them.<br></br>
            I have met many people who I consider close friends through such events and playing online with them.
            </p>
        </div>
      </Element>
    );
  }
}

export default About;
