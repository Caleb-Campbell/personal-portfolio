import React, {useState} from 'react'

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
                return  ( <>
                    <div onClick={openUp} key={skill.id} className='skillWrap'>
                    <h5 className='skillH'>{skill.skillName}</h5>
                    <img className='skillIMG' href='https://picsum.photos/200' />
                    <p className='skillP'>{skill.description}</p>
                    <p>{skill.active ? 'On' : "Off"}</p>
                    </div>
                    {skill.active === true &&
                    <div className='skillWrap'><h5>{skill.info}</h5></div>
                    }
                    </>
                )
            })
      }
    </div>
  )
}

export default Skills
