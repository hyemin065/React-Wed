import React ,{Component} from 'react';

class Prac extends Component{
    constructor(props){
        super(props)
        this.state = {
            text : "",
            list : []
        }
    }

    getInputValue = (e) => {
        const value = e.target.value;
        this.setState({
            text : value
        })
    }

    submitData = (e) => {
        e.preventDefault();
        this.setState({
            text : "",
            list : [...this.state.list,{
                texts : this.state.texts
            }]
        })
    

    }

    render(){
        return(
            <>
                <form onSubmit={this.submitData}>
                    <input type="text" onChange={this.getInputValue} value={this.state.text}/>
                    <button type="submit">추가</button>
                </form>
                <ul>
                    
                        {this.state.list.map(item => {
                            return <li>{this.state.item.text}</li>
                        })}

                   
                </ul>
            </>
        );

    }
}

export default Prac;