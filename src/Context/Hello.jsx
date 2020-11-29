import HelloContext from './Context';
import Bye from './Bye';

function Hello(){
    return(
        <HelloContext.Provider value="안녕하세용">
            <div>zzz</div>
            <Bye />
        </HelloContext.Provider>
    );
}

export default Hello;