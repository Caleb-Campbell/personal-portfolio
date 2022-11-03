import React from "react"
import { motion } from "framer-motion"

import NavBar from "./NavBar"
import Title from "./Title"
import Skills from "./Skills"

const Home = (props) => {

    return (
      <div  className="home">
        <NavBar />
        {/* <h2 className="mobile-title">Caleb Campbell</h2> */}
        <motion.div 
        initial={{opacity: 0, x:10, y:10, boxShadow: 'none'}} 
        animate={{opacity: 1, x:0, y:0, boxShadow: '0 15px 15px var(--opaque)'}} 
        transition={{duration: 1}}
        className="titleWrap">
        <motion.h1
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: .2,
          duration: 1
        }}
         className="WebTitle">Full Stack <br/> Web Developer</motion.h1>
         </motion.div>
        
        <section className="spacer"></section>
        <h3 className="Subtitle">See My Technical Skills</h3>
        <Skills techSkills={props.skills} />
      </div>
    )
  }
export default Home  