import React from "react";
import { Link } from "react-router-dom"; 
import Nav from '../Nav/Nav'
import  './home.css'


const Home = () => {
  return (
    <div className="home-container">
      // <Nav /> {}
      // <h1 className="h1">Welcome to Our Beach Explorer!</h1>
      //{" "}
      <p className="para">
        Discover your next beach destination and create your dream beach wish
        list.
      </p>
      <style>
        {`.material-symbols-outlined {
            font-family: "Tac One", sans-serif;
            font-weight: 400;
            font-style: normal;
              'GRAD' 0,
              'opsz' 24;
          }`}
      </style>
     
      <Link to="/explore" className="explore-container">
        Explore Some Popular FL Beaches
      </Link>
    </div>
  );
};

export default Home;
