import React from 'react';
import styled from 'styled-components';
import List from './List';
import {v4 as uuid} from 'uuid';

const Container = styled.div`
    width:400px;
    height:auto;
    border:1px solid #ddd;
    margin:20px auto;
    padding:20px;
`;

const Title = styled.h1`
    font-size:20px;
    margin-bottom:20px;
`;
const StyleForm = styled.form`
    &:after{
        content:''; display:block; clear:both;
    }
`;

const Input = styled.input`
    width:200px;
    border:1px solid #ddd;
    padding:0 10px;
    height:30px;
    box-sizing:border-box;
    line-height:30px;
    display:block;
    float:left;
    outline:none;
`;

const Button = styled.button`
    width:60px;
    height:30px;
    outline:none;
    display:block;
    float:left;
    background-color:#fff;
    color:#222;
    border:1px solid #222;      
`;
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : "",
            todos:[]
        }
    }


    getInputText = (e) => {
        const value = e.target.value;
        this.setState({
            text : value
        })
    }

    addTodos = (e) => {
        e.preventDefault();
        this.setState({
            text: "",
            todos: [...this.state.todos, {
                text: this.state.text,
                done: false,
                id:uuid()
            }]
        });
    }

    deleteTodos = (key) => {
        const newTodo = this.state.todos.filter(item => item.id !== key);
        this.setState({todos:newTodo})
    }

    completeTodos = (key) =>{
        const newTodo = this.state.todos.map(item => {
            if(item.id === key){
                const newItem = {...item, done: !item.done};
                return newItem
            }
            return item;
        });

        this.setState({
            todos: newTodo,
        })
    }

    componentDidMount(){
        const initState = JSON.parse(localStorage.getItem("todolist"));
        if(initState){
            this.setState({todos:initState})
        }
    }

    componentDidUpdate(){
        localStorage.setItem("todolist",JSON.stringify(this.state.todos));
    }

    render(){
    
        return(
            <Container>
                <Title>TODO LIST</Title>
                <StyleForm onSubmit={this.addTodos}>
                    <Input type="text" onChange={this.getInputText} value={this.state.text}/>
                    <Button>추가</Button>
                </StyleForm>
                <List delete={this.deleteTodos} completeFunction={this.completeTodos} todos={this.state.todos} />
            </Container>
        )
    }
}

export default Todo;
