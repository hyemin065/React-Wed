import React from 'react';
import Login from './Login';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return ( 
      <Login placeTex={{login: "Login", pass: "Password"}} btnText="buttons" />  
      
    )
  }
}

export default App;