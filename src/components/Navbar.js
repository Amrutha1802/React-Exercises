import './Navbar.css';
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
                <NavLink to='/home/:username'>Greetings</NavLink>
                <NavLink to='/login'>Sign-up form</NavLink>
                <NavLink to='/counter'>Counter</NavLink>
            </nav>
  )
}

export default Navbar