import React, {useState} from 'react';

function FunctionCount(){

    const [count, setCount] = useState(0);

    const plus = () =>{
        // setCount(
        //     count+1
        // );
        setCount(prev => prev + 1);
    }

    const minus = () => {
        setCount(prev => prev - 1);
    }
    
    return(
        <div>
            <h2>count :{count}</h2>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
}

export default FunctionCount;