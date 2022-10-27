import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'


export default function NavBar() {

  const [navOn, setNavOn] = useState(false)

  const handleMenuOpen = () => {
    setNavOn(!navOn)
  }

  return (



    <nav>
      <button className='menu' onClick={handleMenuOpen}>Menu</button>

       { !navOn && (
         
         <motion.div 
         initial={{y: 10, opacity: 0,}}
        animate={{y:0, opacity: 1,}}
        transition={{
          duration: 1,
          type:'spring',
          stiffness: 10
        }}
         className='placeHolderWrapper'>
       <h2 className={ `navTitle`} >Caleb Campbell</h2>
        </motion.div> ) }

        {
          navOn && (

          <motion.ul
          initial={{y: -10, opacity: 0,}}
          animate={{y:0, opacity: 1}}
          transition={{
            delay: 0,
            duration: 1,
          }}
          
          
          className={'nav-list'}>
          <li>
        <Link to='/'>Home</Link>
          </li>
          <li>
        <Link to='/about'>About</Link>
          </li>
          <li>
        <Link>Contact</Link>
          </li>
        </motion.ul>


          )
        }

       

        
    </nav>
  )
}
