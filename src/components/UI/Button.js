import React from 'react';
import './button.css';

function Button(props) {
    const myBtn='btn '+props.className+(props.disabled?' disabled':'');
    return ( 
        <button className={myBtn} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
     );
}

export default Button;