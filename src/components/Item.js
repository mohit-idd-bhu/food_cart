import React from 'react';
import Button from './UI/Button';
import Card from './UI/Card';
import './item.css';

function Item(props) {

    return ( 
        <Card className='item'>
            <div className='item-title'>
                <h4>{props.name}</h4>
                ${props.val}
            </div>
            <div className='item-description'>
            <Button onClick={()=>props.onIncrement(props.id)}>+</Button> 
            {" "+props.number+" "} 
            <Button onClick={()=>props.onDecrement(props.id)} disabled={props.number?false:true}>-</Button>
            </div>
            <div>Total = ${props.val*props.number}</div>
        </Card>
     );
}

export default Item;