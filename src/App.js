import React, { Component } from 'react';
import Login from './Login';


class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return ( 
      <>
        <Login placeText={
          {login:"login", pass:"password"}
        }/>
      </>
    )
  }
  
}

export default App;