import React from 'react';
import './explore.css';
import beach1 from '../beachIcons/beach1.jpeg';
import beach2 from '../beachIcons/beach2.jpeg';
import beach3 from '../beachIcons/beach3.jpeg';
import beach4 from '../beachIcons/beach4.jpeg';
import beach5 from '../beachIcons/beach5.jpeg';
import Nav from '../Nav/Nav';
// Define the list of beaches directly within the component or as a separate constant that you import
const beaches = [
  {
    name: "Beach 1",
    description: "Description for Beach 1",
    moreInfoUrl: "http://example.com/beach1",
    imgUrl: "../beachIcons/beach1.jpeg"
  },
  {
    name: "Beach 2",
    description: "Description for Beach 2",
    moreInfoUrl: "http://example.com/beach2",
    imgUrl: "../beachIcons/beach2.jpeg"
  },
  {
    name: "Beach 3",
    description: "Description for Beach 3",
    moreInfoUrl: "http://example.com/beach3",
    imgUrl: "../beachIcons/beach3.jpeg" 
   
  },
  {
    name: "Beach 4",
    description: "Description for Beach 4",
    moreInfoUrl: "http://example.com/beach4",
    imgUrl: "../beachIcons/beach4.jpeg" 
   
  },
  {
    name: "Beach 5",
    description: "Description for Beach 5",
    moreInfoUrl: "http://example.com/beach5",
    imgUrl: "../beachIcons/beach5.jpeg" 
   
  },
];

const Explore = () => {
  return (
    <div className="explore-container">

      <Nav />
      {beaches.map((beach, index) => (
        <div key={index} className="beach-card">
          <img src={beach.image} alt={beach.name} className="beach-image" />
          <h2>{beach.name}</h2>
          <p>{beach.description}</p>
          <a href={beach.moreInfoUrl} target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      ))}
    </div>
  );
};

export default Explore;

