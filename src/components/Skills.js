import React, {useState} from 'react'
import {motion} from 'framer-motion'
import capy from '../data/assets/capy.jpg'

function Skills(props) {

    const {techSkills}  = props

    const [skills, setSkills] = useState(techSkills)

    const openUp = (e) => {
      console.log(e.target)
    }

  return (
    <div className='skillsGrid' >
      {
            skills.map(skill => {
                return  ( <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 2
                  
                }}
                key={skill.id}
                onClick={openUp}
                
                >
                    
                    <div   className='skillWrap'>
                    {/* <img className='skillIMG' src={skill.img} /> */}
                    <h5 className='skillH'>{skill.skillName}</h5>
                    <h5 className='skillH'>+</h5>
                    {skill.active  && (
                      <div>
                    <p className='skillP'>{skill.description}</p>
                    <p>{skill.active ? 'On' : "Off"}</p>
                      </div>
                    )}

                    
                    </div>
                    
                    </motion.div>
                )
            })
      }
    </div>
  )
}

export default Skills
