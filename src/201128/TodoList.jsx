import React, { useState } from 'react';

function TodoList(){

    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);

    const getValue = (e) =>{
        const value = e.target.value;
        setInputValue(value);
    }

    const setValue = (e) =>{
        e.preventDefault();
        setInputValue("");
        setTodoList([...todoList, {text : inputValue, id : Math.floor(Math.random()*100000)}]);
        
    }

    return(
        <>
            <form onSubmit={setValue}>
                <input type="text" value={inputValue} onChange={getValue}/>
                <button>sdfds</button>
            </form>
            <ul>
                {todoList.map(itme => <li key={itme.key} id={itme.id}>{itme.text}</li>)}

            </ul>
        </>
    );
}

export default TodoList;