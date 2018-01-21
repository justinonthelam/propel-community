import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

// The Main component renders one of the provided
// Routes (provided that one matches). Routes will match 
// any pathname that starts with the same path, /roster == /rosterX.
// The / route will only match
// when the pathname is exactly the string "/"

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main