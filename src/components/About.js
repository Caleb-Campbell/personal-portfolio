import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import '../styles/about.css'

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
            <p>I grew up in Spokane, Washington, working from the time I was 14. After marrying the beautiful Katlyn Hatch, we moved to Southern Idaho, allowing her to finish school for Elementary Education, while I continued studying Full Stack Web Development at Bloom Institute of Technology. </p>
          </div>
        </div>

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
