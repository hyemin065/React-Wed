import React from 'react';
import Child from './Child';

class TodoPractice extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : "",
            list : [],
        }
    }

    getInputValue = (e) =>{
        const value = e.target.value;
        console.log(e);
        this.setState = {
            text : value
        }
    }

    addTodos = (e) =>{


    }

    render(){
        return(
            <>
               
                <ul>
                    <li>
                        dfdf
                    </li>
                </ul>
            </>
        );
    }
}

export default TodoPractice;