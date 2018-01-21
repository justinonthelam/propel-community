import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Header extends Component{
  render(){
    return(
      <div>
        <Nav />
      </div>
    )
  }
}

class Nav extends Component{
  render(){
    return(
      <nav>
        <div className="container">
          <div className="left">
            <Logo />
          </div>
          <div className="right">
            <NavLinks />
          </div>
        </div>
      </nav>
    )
  }
}

class Logo extends Component{
  render(){
    return(
      <Link to="/">
        <h1>
          Propel Community
        </h1>
      </Link>
    )
  }
}

class NavLinks extends Component{
  render(){
    return(
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {/* <a href="#" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Blog</a> */}
      </div>
    )
  }
}

export default Header