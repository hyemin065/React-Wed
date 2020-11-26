import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.clock(),
            1000
        );
    }

    componentWillUnmount() {
    }

    render(){
        return(
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

}

export default Clock;