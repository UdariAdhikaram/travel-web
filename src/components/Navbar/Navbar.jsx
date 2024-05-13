import React, {useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link } from 'react-router-dom';



export const Navbar = () => {
const [active, setActive] = useState('navBar')
// function to toggle naveBar
const showNav = () =>{
    setActive('navBar activeNavbar')
}

// function to remove naveBar
const removeNavbar = () =>{
    setActive('navBar')
}

  return (
    <section className='navBarSection'>
        <header className="header flex">

            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><MdOutlineTravelExplore className="icon"/>  Trippy</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    
                    <li className="navItem">
                    
                        <a href="#" className="navLink" >Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Packages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Shop</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Pages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">News</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>

                    <button className='btn'>
                        <a href='#'>BOOK NOW</a>
                    </button>
                </ul>

            <div onClick={removeNavbar} 
            className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
            </div>
            </div>

            <div onClick={showNav}
            className="toggleNavbar">
            <TbGridDots className="icon"/>
            </div>
        </header>

        <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li> {/* Add this line */}
          {/* Add other navigation links here */}
        </ul>
      </nav>

    </section>
  )
  
}

export default Navbar
