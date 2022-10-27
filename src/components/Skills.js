import React, {useState} from 'react'
import {motion} from 'framer-motion'

function Skills(props) {

    const {techSkills}  = props

    const [skills, setSkills] = useState(techSkills)
    console.log(skills)

    const openUp = (e) => {
        e.target.active = !e.target.active
    }

  return (
    <div className='skillsGrid'>
      {
            skills.map(skill => {
                return  ( <motion.div
                whileHover={{
                  scale: 1.1
                }}
                
                >
                    <div onClick={openUp} key={skill.id} className='skillWrap'>
                    <h5 className='skillH'>{skill.skillName}</h5>
                    <img className='skillIMG' href='https://picsum.photos/200' />
                    <p className='skillP'>{skill.description}</p>
                    <p>{skill.active ? 'On' : "Off"}</p>
                    </div>
                    {skill.active === true &&
                    <div className='skillWrap'><h5>{skill.info}</h5></div>
                    }
                    </motion.div>
                )
            })
      }
    </div>
  )
}

export default Skills
