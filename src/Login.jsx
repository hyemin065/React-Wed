import React from 'react';
import Button from './Button';

function Login(props){
    return(
        <div>
            <input type="text" placeholder={props.placeTex.login}/>
            <input type="password" placeholder={props.placeTex.pass}/>
            <Button btn={props.btnText}/>
        </div>  
    );
}

export default Login;