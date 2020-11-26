import React from 'react';

class Count extends React.Component{
    constructor(props){
        //필수(생성/초기화)
        super(props);
        this.state = {
            number : 0, 
        }
    }

    componentDidMount(){
        // 화면에 그려지는거
        console.log("마운트")
    }

    componentDidUpdate(){
        // 스테이트 업데이트되는거
        console.log("더하는 중")
    }

    componentWillUnmount(){
        // 제거되는거
    }

    plus = () => {
        this.setState({
            number: this.state.number + 1,
        });
    }

    minus = () =>{
        this.setState({
            number : this.state.number - 1,
        })
    }

    render(){
        return(
            <>
                <div>{this.state.number}</div>
                <button onClick={this.plus}>+1</button>
                <button onClick={this.minus}>-1</button>
            </>
        );
    }
}

export default Count;