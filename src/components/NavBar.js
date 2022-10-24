import React, {useState} from 'react'
import {Link} from 'react-router-dom'


export default function NavBar() {

  const [navOn, setNavOn] = useState(false)

  const handleMenuOpen = () => {
    setNavOn(!navOn)
  }

  return (
    <nav>
      <button className='menu' onClick={handleMenuOpen}>Menu</button>
      <div className='placeHolderWrapper'>
        <h2 className={navOn ? `navTitle` : `navTitle activeTitle`}>Caleb Campbell</h2>
      </div>
        <ul className={navOn ? 'nav-list active animation' : 'nav-list'}>
          <li>
        <Link to='/'>Home</Link>
          </li>
          <li>
        <Link to='/about'>About</Link>
          </li>
          <li>
        <Link>Contact</Link>
          </li>
        </ul>
    </nav>
  )
}
