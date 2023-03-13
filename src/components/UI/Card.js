import React from 'react';
import './card.css';

function Card(props) {
    const myClass='card '+props.className;
    return ( 
        <div className={myClass}>
            {props.children}
        </div>
     );
}

export default Card;