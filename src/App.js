import React from 'react';
import Login from './Login';

function App(){
  return ( 
    <Login placeTex={{login: "Login", pass: "Password"}} btnText="buttons" />  
  )
}

export default App;