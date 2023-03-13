import React from 'react';
import './overlay.css';
import Portal from '../Extras/Portal';

function Overlay(props) {

    return ( 
        <Portal parentID={document.getElementById('root')}>
            {props.display?
            <div 
                className='overlay-background'
                onClick={props.onDisplayChange}
            ></div>:
            <></>}
            {props.display?
            <div className='overlay-display '>
                {props.children}
            </div>:
            <></>
            }
        </Portal>
     );
}

export default Overlay;