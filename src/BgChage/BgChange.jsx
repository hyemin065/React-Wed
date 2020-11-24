import React from 'react';
import styled from 'styled-components';
import BgColor from './BgColor';

const Input = styled.input`
    margin-bottom:20px;
`;


class BgChange extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : "",
            bgcolor: ""
        }    
    }

    getInputValue = (e) =>{
        const value = e.target.value;
        this.setState({
            text : value
        })
    }
    
    bgChange = (e) => {
        e.preventDefault();
        console.log(e);
        this.setState({
            text : "",
            bgcolor : this.state.text
        })
    }


    componentDidMount(){
        const bgcolor = JSON.parse(localStorage.getItem("bgcolor"));
        if(bgcolor){
            this.setState({bgcolor:bgcolor})
        }
    }

    componentDidUpdate(){
        localStorage.setItem("bgcolor",JSON.stringify(this.state.bgcolor))
        
    }

    render(){
        return(
            <>
                <form onSubmit={this.bgChange}>
                    <Input type="text" onChange={this.getInputValue} value={this.state.text}/>
                    <button type="submit">칠하기</button>
                </form>
                <BgColor bg={this.state.bgcolor}/>                
            </>
        );
    }
}

export default BgChange;