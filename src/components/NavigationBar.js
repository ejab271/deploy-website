import React, { Component } from "react";
import website from "../images/Logo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import { HashRouter as Router, Switch, Route,withRouter,Link } from 'react-router-dom';
import About from "../about/About";
// import Contact from "./Contact/Contact";
import Resume from "../resume/Resume";
import Home from "../home/Home";
import history from '../history';

const Navigation = (props) => {
  console.log(props);
  return (
    <Router history={history}>
    <Navbar fixed="top" bg="dark" variant="dark">
         <Navbar.Brand href="/">
    <img
      src={website}
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="React Bootstrap logo"
    />
  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="pills"  className="mr-auto">
                  <Link className= "Link-font" to='/'>Home</Link>
                  <Link className= "Link-font" to="/About">About</Link>
                  <Link className= "Link-font" to="/Resume">Résumé</Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
            
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                {/* <Route path="/Contact" component={Contact} /> */}
                <Route path="/Resume" component={Resume} />
            </Switch>
        </Router>
  )
}

export default withRouter(Navigation);
