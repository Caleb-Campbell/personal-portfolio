import React from "react"
import { motion } from "framer-motion"

import NavBar from "./NavBar"
import Title from "./Title"
import Skills from "./Skills"

const Home = (props) => {

    return (
      <div className="home">
        <NavBar />
        <motion.h1
        initial={{
          y: '-100vh',
          opacity: 0
        }}
        animate={{
          x: 0,
          y: 50,
          opacity: 1
          
        }}
         className="WebTitle">Full <br/> Stack <br/></motion.h1>
        <motion.span
        initial={{
          y: '100vh',
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          delay: .1,
          duration: 2
        }}
        
        className="WebTitle-big">Web Developer</motion.span>
        <section className="spacer"></section>
        <h3 className="Subtitle">See My Technical Skills</h3>
        <Skills techSkills={props.skills} />
      </div>
    )
  }
export default Home  