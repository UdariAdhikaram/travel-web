import React from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'

export const Navbar = () => {
  return (
    <section className='navBarSection'>
        <header className='"header flex'>

            <div className="logoDiv">
                <a href="#" className='logo'>
                    <h1><MdOutlineTravelExplore className="icon"/>  Trippy</h1>
                </a>
            </div>
        </header>
    </section>
  )
}

export default Navbar
