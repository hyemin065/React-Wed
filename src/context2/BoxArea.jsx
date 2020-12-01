import React, {useState} from 'react';
import InputValue from './InputValue';
import Names from './Names';
import {InputProvider} from './Context';

function BoxArea(){

    const [text, setText] = useState("");

    return(
        <InputProvider value={{text, setText}}>
            <InputValue />
            <Names />
        </InputProvider>
    );
}

export default BoxArea;