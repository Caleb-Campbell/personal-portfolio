import React from "react"

import NavBar from "./NavBar"
import Title from "./Title"
import Skills from "./Skills"

const Home = (props) => {

    return (
      <div className="home">
        <NavBar />
        <h1 className="WebTitle">Full <br/> Stack <br/> <span className="WebTitle-big">Web Developer</span></h1>
        <section className="spacer"></section>
        <h3 className="Subtitle">See My Technical Skills</h3>
        <Skills techSkills={props.skills} />
      </div>
    )
  }
export default Home  