import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

const Container = styled.div`
    width:300px;
    height:300px;
    border:1px solid #ddd;
    background-color: ${props => props.bg[0] === "#" ? props.bg : "#" + props.bg};

`;

function Bgcolor(){

    const [inputValue, setInputValue] = useState("");
    const [bgColor, setBgColor] = useState("");

    const getInput = (e) =>{
        const value = e.target.value;
        setInputValue(value);
    }

    const setInput = (e) =>{
        e.preventDefault();
        setInputValue("")
        setBgColor(inputValue);
    }

    return(
        <>
        <form onSubmit={setInput}>
            <input type="text" onChange={getInput} value={inputValue}/>
            <button type="submit">칠하기</button>
        </form>
        <Container bg={bgColor}></Container>
        </>
    );
}


export default Bgcolor;