import React, { useState } from 'react';
import Nav from '../Nav/Nav'
const BeachUser = () => {
  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to "log in" the user
  const handleLogin = () => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter a username.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        <Nav/>
        <h2>Login to Your Account</h2>
        <input
          type="text"
          placeholder="Enter Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  // The rest of your component for showing the beach list, assuming the user is logged in
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      {/* The rest of your existing code for displaying the mock beach list */}
    </div>
  );
};

export default BeachUser;
