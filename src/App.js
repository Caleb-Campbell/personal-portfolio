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
const [dark, setDark] = useState(false)


const handleDarkButton = () => {
  setDark(!dark)
  if(dark) {
    document.body.classList.toggle('dark-mode')
    document.body.childNodes.toggle('light-text')
  }
}

  return (
    <div className="App" >
      <div className='darkModeWrap' >
      <button onClick={handleDarkButton} className='darkMode'>Dark</button>
      </div>
      <Routes>
        <Route path='/' dark={dark} element={<Home />} />
        <Route path='/about' dark={dark} element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
