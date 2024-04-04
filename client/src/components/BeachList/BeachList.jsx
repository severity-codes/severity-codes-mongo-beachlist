// Import necessary modules and components
import React, { useState } from 'react';
import axios from 'axios'; // Used for making HTTP requests
import Nav from '../Nav/Nav'; // Navigation component
import ResultCard from '../resultcards/ResultCard'; // Component to display search results
import BeachForm from '../BeachForm/BeachForm'; // Form component for adding a new beach

const BeachList = () => {
    // State for storing the list of beaches returned from search or added manually
    const [beaches, setBeaches] = useState([]);
    // State for the current search query
    const [searchQuery, setSearchQuery] = useState('');
    // State for storing a user's wish list of beaches
    const [wishList, setWishList] = useState([]);

    // Handler for changes in the search input field
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Function to add a new beach via a POST request
    async function onAddBeach(beachData) {
        try {
            // Attempt to send a POST request with beach data
            const response = await axios.post('http://localhost:8000/beachy', beachData);
            const newBeach = response.data;
            // If successful, update the beaches state to include the new beach
            setBeaches(prev => [...prev, newBeach]);
        } catch (error) {
            // Log any errors
            console.error('Failed to add the beach:', error.response ? error.response.data : error.message);
        }
    }

    // Handler for submitting the search form
    const handleSearchSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submit action
        if (!searchQuery) return; // If the query is empty, do nothing
        try {
            // Attempt to fetch beaches matching the search query
            const response = await axios.get(`http://localhost:8000/beachy`, { params: { query: searchQuery } });
            // Replace the current beaches state with the fetched search results
            setBeaches(response.data);
        } catch (error) {
            // Log any errors
            console.error('Failed to fetch beaches:', error);
        }
    };

    // Function to remove a beach from the list
    const removeBeachFromList = (beachName) => {
        // Filter out the beach by name and update the beaches state
        setBeaches(prevBeaches => prevBeaches.filter(beach => beach.name !== beachName));
    };

    // Function to add a beach to the wish list
    const addToWishList = (beachToAdd) => {
        // Check for duplicates in the wish list
        if (wishList.some(beach => beach.name === beachToAdd.name)) {
            console.error("Beach is already in your wish list.");
            return;
        }
        // If no duplicates, update the wish list to include the new beach
        setWishList(currentWishList => [...currentWishList, beachToAdd]);
    };

    // Component rendering
    return (
        <div>
            <Nav /> {/* Render the navigation component */}
            <BeachForm onAddBeach={onAddBeach} /> {/* Render the form for adding new beaches */}
            <ResultCard wishList={wishList} /> {/* Render the results/wish list */}
            <form onSubmit={handleSearchSubmit}> {/* Form for searching beaches */}
                <input
                    type="text"
                    placeholder="Get a list of fl beaches..."
                    value={searchQuery}
                    onChange={handleSearchChange} // Bind the input to the searchQuery state
                />
                <button type="submit">Search</button>
            </form>
            {/* Map over the beaches state and render each beach with options to remove or add to the wish list */}
            {beaches.map(beach => (
                <div key={beach.name}>
                    <h4>{beach.name}</h4>
                    <button onClick={() => removeBeachFromList(beach.name)}>Remove</button>
                    <button onClick={() => addToWishList(beach)}>Add to Wish List</button>
                </div>
            ))}
        </div>
    );
};

export default BeachList;
