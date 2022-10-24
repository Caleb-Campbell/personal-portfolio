import React from 'react'
import {Routes, Route} from 'react-router-dom'

import NavBar from './NavBar'

export default function About() {
  return (
    <div>
      <section className='aboutSection'>
        <NavBar />
        <h3>
            <strong className='efficiency'>Hard Work</strong>
            <strong className='efficiency'>Communication</strong>
            <strong className='efficiency'>Attention to Detail</strong>
        </h3>
        
        
      </section>
    </div>
  )
}
