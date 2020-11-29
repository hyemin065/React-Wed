import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import TodoList from './201128/TodoList';
import Parents from './example/Parents';
import BgChange from './BgChage/BgChange';
import Prac from './practice/Prac';
import FunctionCount from './Function/FunctionCount';
import Bgcolor from "./Function/Bgcolor";
import Hello from './Context/Hello';

class Routers extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact render={()=><div>home</div>} />
                    <Route path="/todo" component={TodoList}/>
                    <Route path="/parents" component={Parents} />
                    <Route path="/bgchange" component={BgChange} />
                    <Route path="/prac" component={Prac} />
                    <Route path="/function" component={FunctionCount}/>
                    <Route path="/bgcolor" component={Bgcolor} />
                    <Route path="/hello" component={Hello} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        )
    }
}

export default Routers;