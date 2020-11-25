import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Todo from './Todo';
import Parents from './example/Parents';
import BgChange from './BgChage/BgChange';

class Routers extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact render={()=><div>home</div>} />
                    <Route path="/hello" render={()=> <div>hello</div>} />
                    <Route path="/bye" render={()=><div>bye</div>}/>
                    <Route path="/todo" component={Todo}/>
                    <Route path="/parents" component={Parents} />
                    <Route path="/bgchange" component={BgChange} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        )
    }
}

export default Routers;