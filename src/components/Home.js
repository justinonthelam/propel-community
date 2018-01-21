import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Home extends Component {
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
      },
      p:{
        lineHeight: "1.5em",
      },
    }
    return(
      <div className="container">
        <div style={styles.centerJumbo}>
          <div>
            <h1 style={styles.h1}>
              Hello World
            </h1>
            <ButtonBar />
        </div>

        </div>
        {/* <p style={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisi nisl, gravida eu scelerisque in, rhoncus ac nulla. Proin a ultricies ante. Etiam pellentesque nec sem in bibendum. Vestibulum gravida auctor nibh vel commodo. Suspendisse imperdiet vitae ex non viverra. Donec leo dui, aliquet eu lorem at, molestie imperdiet diam. Nulla eu hendrerit dolor.
        </p> */}
      </div>
    )
  }
}

class ButtonBar extends Component{
  render(){
    const styles ={
      buttonRow:{
        display: "-webkit-box",
        display: "-ms-flexbox",
        display: "flex",
        verticalAlign: "middle",
        WebkitBoxAlign: "center",
            MsFlexAlign: "center",
                alignItems: "center",
        WebkitBoxPack: "center",
            MsFlexPack: "center",
                justifyContent: "center",
        paddingTop: "30px",
      },
    }
    return(
      <div style={styles.buttonRow}>
        <ButtonLink 
          link="#"
          fontAwesome="linkedin-square"
          text="LinkedIn"/>
        <ButtonLink 
          link="#"
          fontAwesome="github"
          text="Github"/>
      </div>    
    )
  }
}

class ButtonLink extends Component{
  render(){
    const styles ={
      container:{
        marginRight: "10px",
      },
      button:{
        verticalAlign: "middle",
        display: "-webkit-box",
        display: "-ms-flexbox",
        display: "flex",
        verticalAlign: "middle",
        WebkitBoxAlign: "left",
            MsFlexAlign: "left",
                alignItems: "left",
        WebkitBoxPack: "left",
            MsFlexPack: "left",
        justifyContent: "left",
        alignItems:"center",
        justifyContent:"center",
      },
      left:{
        paddingRight: "10px",
        fontSize: "1.5em",
      },
      right:{
        fontFamily: "Roboto",
      },
    }
    return(
      <a href={this.props.link} style={styles.container}>
        <div className="button" style={styles.button}>
          <div style={styles.left}>
            <i className={"fa fa-"+this.props.fontAwesome} aria-hidden="true"></i> 
          </div> 
          <div style={styles.right}>
            {this.props.text}
          </div>
        </div>
      </a>
    )
  }
}

export default Home;