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
         
         className='placeHolderWrapper'>
       <h2 className={ `navTitle`} >Caleb Campbell</h2>
        </motion.div> ) }

        {
          navOn && (

          <motion.ul
          
          
          
          className={'nav-list'}>
          <li>
        <Link to='/'>Home</Link>
          </li>
          <li>
        <Link to='/about'>About</Link>
          </li>
          <li>
        <Link to='/dashboard'>DashBoard</Link>
          </li>
        </motion.ul>


          )
        }

       

        
    </nav>
  )
}
