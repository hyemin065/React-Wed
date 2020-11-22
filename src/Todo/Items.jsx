import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    margin-bottom:10px;
`;

const Span = styled.span`
    text-decoration: ${props => props.complete ? "line-through":"none"};
`

const Button = styled.button`
    width:auto;
    padding:10px;
    height:auto;
    background-color: ${props => props.themeColor};
    border:1px solid ${props => props.themeColor};
    color:#fff;
    margin-left:10px;
`;
class Items extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Li>
                <Span complete={this.props.done} >{this.props.text}</Span>
                <Button onClick={() => this.props.deleteLi(this.props.id)} themeColor="red">X</Button>
                <Button onClick={() => this.props.completeHandler(this.props.id)} themeColor="blue">O</Button>
                <Button themeColor="green">E</Button>
            </Li>
        );
    }
}

export default Items;