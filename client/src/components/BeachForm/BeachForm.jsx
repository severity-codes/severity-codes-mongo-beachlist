import React, { useState } from 'react';

function BeachForm({ onAddBeach }) {
    const [beach, setBeach] = useState({
        name: '',
        amenities: '',
        location: '',
        accessibility: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBeach(prevBeach => ({
            ...prevBeach,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onAddBeach(beach);
        // Reset form fields after submission
        setBeach({
            name: '',
            amenities: '',
            location: '',
            accessibility: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={beach.name} 
                onChange={handleChange} 
                placeholder="Beach Name" 
            />
            <input 
                type="text" 
                name="amenities" 
                value={beach.amenities} 
                onChange={handleChange} 
                placeholder="Amenities" 
            />
            <input 
                type="text" 
                name="location" 
                value={beach.location} 
                onChange={handleChange} 
                placeholder="Location" 
            />
            <input 
                type="text" 
                name="accessibility" 
                value={beach.accessibility} 
                onChange={handleChange} 
                placeholder="Accessibility" 
            />
            <button type="submit">Add Beach</button>
        </form>
    );
}

export default BeachForm;
