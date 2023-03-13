import React,{useState} from 'react';
import Button from './UI/Button';
import Overlay from './UI/Overlay';
import './cart.css';

function Cart(props) {
    const [display,setDisplay]=useState(false);
    const total=props.number.reduce((prev,curr)=> prev+curr);
    const valid_items=props.item.filter(item=> (props.number[item.key]>0));

    const displayChangeHandler=()=>{
        const change= !(display);
        setDisplay(change);
    }
    return ( 
        <div>
            <Button onClick={displayChangeHandler} disabled={total?false:true}>
                My cart
                <div className='store-number'><b>{total}</b></div>
            </Button>  

            <Overlay display={display} onDisplayChange={displayChangeHandler}>
            <ul>
                {valid_items.map(item=>{
                    return <li key={item.key}>{item.name} : ${props.number[item.key]*item.val}</li>
                })}
            </ul>
            <Button onClick={displayChangeHandler}>Order</Button>
            </Overlay>

        </div>
     );
}

export default Cart;