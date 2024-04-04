import React from 'react';
import './wishList.css';
import beachicon from '../WishListItem/beachicon.png'; 

const WishListItem = ({ beach }) => {
    return (
        <li>
            <img src={beachicon} alt="Beach Icon" className='beachyicon' />
            {beach.name} - {beach.location} - {beach.aminites}
           
        </li>
    );
};

export default WishListItem;
