import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import styled from 'styled-components';

//components
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import DashBoard from './components/DashBoard';

// Data
import siteData from './data';



function App() {

  const [technicalSkills, setTechnicalSkills] = useState(siteData.skills.technicalSkills)


  return (
    <div  className="App" >
      <div className='darkModeWrap' >
      </div>
      <Routes>
        <Route path='/'  element={<Home skills={technicalSkills} />} />
        <Route path='/about'  element={<About />} />
        <Route path='/dashboard'  element={<DashBoard />} />
      </Routes>

    </div>
  );
}

export default App;
