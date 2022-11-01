import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import ProfileImage from '../data/assets/profile.jpg'

import NavBar from './NavBar'

export default function About() {


const [selectedFolder, setSelectedFolder] = useState('hard')

const getFolder = e => {
  setSelectedFolder(e.target.name)
}

  return (
    <div>
      <section className='aboutSection'>
        <NavBar />
        <div className='about-page'>
          <div className='marryWrap'>
            <img src={ProfileImage} />
          </div>
          <div className='about-header'>
            <h3>
              Get to know me
            </h3>
          </div>
        </div>

        <section className="spacer"></section>
        <h3 className="Subtitle">Other Valuable Skills</h3>


        </section>
        <div className='folderBar'>
        <button onClick={getFolder} name='hard'  className='folder'>Hard Work</button>
        <button onClick={getFolder} name='comm' className='folder'>Communication</button>
        <button onClick={getFolder} name='att' className='folder'>Attention to Detail</button>
        </div>
        {
          selectedFolder === 'hard' && (
            <div className='attWrap'>
              <p>hard work</p>
            </div>
          )
        }
        {
          selectedFolder === 'comm' && (
            <div className='attWrap'>
              <p>communication</p>
            </div>
          )
        }
        {
          selectedFolder === 'att' && (
            <div className='attWrap'>
              <p>attention to detail</p>
            </div>
          )
        }
        
    </div>
  )
}
