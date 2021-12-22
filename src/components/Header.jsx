import React from 'react';
import reactSVG from '../Assets/reactSVG.svg';

function Header() {
    return (
        <div className='header'>
            <img src={reactSVG} alt="react" className='reactSVG'/>
            <h1>React Demo using reqres API</h1>
        </div>
    )
}

export default Header
