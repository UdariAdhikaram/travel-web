import React from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

export const Navbar = () => {
  return (
    <section className='navBarSection'>
        <header className='"header flex'>

            <div className="logoDiv">
                <a href="#" className="logo">
                    <h1><MdOutlineTravelExplore className="icon"/>  Trippy.</h1>
                </a>
            </div>

            <div className='navBar'>
                <ul className="navLists flex">
                    
                    <li className='navItem'>
                        <a href='#' className='navLink'>Home</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>Packages</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>Shop</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>About</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>Pages</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>News</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>Contact</a>
                    </li>

                    <button className='btn'>
                        <a href='#'>BOOK NOW</a>
                    </button>
                </ul>

            <div className='closeNavbar'>
            <AiFillCloseCircle className="icon"/>

            
            </div>

            </div>

            <div className="toggleNavbar">
            <TbGridDots className="icon"/>
            </div>
        </header>
    </section>
  )
}

export default Navbar
