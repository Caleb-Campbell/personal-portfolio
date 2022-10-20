import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import styled from 'styled-components';

//components
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';


const mainBody = styled.div`
`

function App() {


  return (
    <div className="App" >
      <div className='darkModeWrap' >
      </div>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/about'  element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
