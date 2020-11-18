import React from 'react';
import Button from './Button';

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <input type="text" placeholder={this.props.placeTex.login}/>
                <input type="password" placeholder={this.props.placeTex.pass}/>
                <Button btn={this.props.btnText}/>
            </div>  
        );
    }
}

export default Login;