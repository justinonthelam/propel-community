import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Footer extends Component{
  render(){
    const styles ={
      container:{
        paddingTop: "20px",
      },
      footer:{
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        height: "60px",
        fontSize: "0.8em",
        margin: "0 auto",
        maxWidth: "1024px",
        minWidth: "50%",
        width: "75%",
      }
    }

    return(
      <div style={styles.container}>
        <div style={styles.footer}>
          this site is under construction <i className="fa fa-code" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default Footer
