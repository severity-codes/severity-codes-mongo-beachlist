import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'
//still need contact
const Nav = () => {
    return (
        <nav style={{ marginBottom: '20px' }}>
            
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'space-around' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/beachlist"> Floridas Beaches to explore </Link></li>
                
                <li><Link to="/beachuser">Login</Link></li>
                
            </ul>
        </nav>
    );
};

export default Nav;
