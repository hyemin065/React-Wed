import React from 'react';
import Items from './Items'; 

class List extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const deleteFunc = this.props.delete;
        return(
            <ul>
                {this.props.todos.map(item => {
                    return <Items completeHandler={this.props.completeFunction} deleteLi={deleteFunc} done={item.done} id={item.id} key={item.id} text={item.text} />
                })}
            </ul>
        );
    }
}

export default List;