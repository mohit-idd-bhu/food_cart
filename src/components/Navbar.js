import React from 'react';
import Card from './UI/Card';
import './navbar.css';
import Cart from './Cart';

function Navbar(props) {
    return ( 
        <Card className='navbar'>
            <div className='company-title'>ReactEats.com</div>
            <Cart item={props.item} number={props.number}/>
        </Card>
     );
}

export default Navbar;