import React, { useContext } from 'react';
import InputContext from './Context';

function Names(){

    const context2 = useContext(InputContext);
    
    return(
        <>
            <div>{context2.text}</div>
        </>
    );
}

export default Names;