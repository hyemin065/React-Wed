import React, {useContext} from 'react';
import InputContext from './Context';


function InputValue(){

    const context2 = useContext(InputContext);

    const getText = (e) => {
        context2.setText(e.target.value);
    }

    return(
        <input type="text" value={context2.text} onChange={getText} />
    );
}

export default InputValue;