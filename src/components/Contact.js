import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <Body />
      </div>
    )
  }
}

class Body extends Component{
  render(){
    const styles ={
      centerJumbo:{
        // paddingTop: "50px",
        // paddingBottom: "50px",
        // verticalAlign: "middle",
        height: "60vh",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexFlow:"row wrap",
      },
      h1:{
        fontWeight: "10",
        fontSize: "1.5em",
        lineHeight: "1.5em",
        justifyContent:"center",
        textAlign: "center",
        textAlignLast: "center",
        paddingBottom: "20px",
      },
      p:{
        lineHeight: "1.5em",
      },
    }
    return(
      <div className="container">
        <div style={styles.centerJumbo}>
          <div>
            <h1 style={styles.h1}>email</h1>
            <a href="mailto:justin.uwo@gmail.com">justin.uwo@gmail.com</a>    
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;