import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeachList from './components/BeachList/BeachList';
import './App.css' 
import Home from './components/views/Home';
import BeachUser from './components/usercards/BeachUser'
import Explore from './components/Explore/Explore';
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/beachuser" element={<BeachUser />} />
        <Route path="/beachlist" element={<BeachList />} />
        <Route path="/explore" element={<Explore />} />
        
        
        
      </Routes>
    </Router>
  );
}

export default App;
