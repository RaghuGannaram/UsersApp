import React from 'react';
import users from '../Assets/users.svg';

function Sidebar() {
    return (
        <div className='sidebar'>
            <img src={users} alt="users" className="userSVG"/>
        </div>
    )
}

export default Sidebar
