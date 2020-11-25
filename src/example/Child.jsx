import React from 'react';

class Child extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.props.data}/>
            </div>
        );
    }
}

export default Child