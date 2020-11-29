import {useContext} from 'react';
import HelloContext from './Context';

function Bye(){

    const hello = useContext(HelloContext);
    
    return(
        <div>{hello}</div>
    );
}

export default Bye;