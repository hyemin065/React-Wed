import React from 'react';
import styled from 'styled-components';

const BgContainer = styled.div`
    width:500px;
    height:500px;
    background: ${props => props.bgcolor[0] == "#" ? props.bgcolor : "#" + props.bgcolor};
`;

class BgColor extends React.Component{
    constructor(props){
        super(props);  
    }

    render(){
        return(
            <>
                <BgContainer bgcolor={this.props.bg}/>
            </>
        );
    }
}

export default BgColor;