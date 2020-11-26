import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

const Container = styled.div`
    width:300px;
    height:300px;
    border:1px solid #ddd;
    background-color:#ddd;

`;

function Bgcolor(){

    const [inputValue, setInputValue] = useState("");
    const [bgColor, setBgColor] = useState("");

    const getInput = (e) =>{
        const value = e.target.value;
        setInputValue(value);
    }

    const setInput = (e) =>{
        const bgcolor = 
        setBgColor();
    }

    return(
        <>
        <form>
            <input type="text" onChange={getInput} value={inputValue}/>
            <button type="submit">칠하기</button>
        </form>
        <Container></Container>
        </>
    );
}


export default Bgcolor;