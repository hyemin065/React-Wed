import React from 'react';
import Button from './Button';

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <input type="text" placeholder={this.props.placeText.login} />
                <input type="text" placeholder={this.props.placeText.pass} />
                <Button text="buttonss" />
            </div>
        );
    }
}

export default Login;