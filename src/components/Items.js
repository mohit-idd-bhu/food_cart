import React from 'react';
import Card from './UI/Card';
import Item from './Item';
import './items.css';

function Items(props) {
    const total=
        props.item.map(
            item=> item.val*props.number[item.key]
        ).reduce((prev,curr)=> prev+curr);
    console.log(total);
    return ( 
        <Card className='item-list'>
            {props.item.map(
                item =>
                <Item 
                name={item.name} 
                val={item.val} 
                number={props.number[item.key]}
                id={item.key}
                onIncrement={props.onIncrement}
                onDecrement={props.onDecrement}
                key={item.key}
                />
            )}
            <div className='order-value'>
                Your Order : ${total}
            </div>
        </Card>
     );
}

export default Items;