import React from 'react';
import WishListItem from '../WishListItem/WishListItem';

const ResultCard = ({ wishList }) => {
    return (
        <div className="result-card">
            {wishList && wishList.length > 0 ? (
                <>
                    <h2>My Beach Wish List</h2>
                    <ul>
                        {wishList.map((beach) => (
                            <WishListItem key={beach.name} beach={beach} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>Your wish list is empty.</p>
            )}
        </div>
    );
};

export default ResultCard;

