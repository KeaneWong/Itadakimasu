import React, {useState} from 'react'
import './style.css'
import { createRequire } from 'module'
import Search_Icon from '../../Assets/Icons/Search_Icon.png';
import {NavLink} from 'react-router-dom';
/**
* @author
* @function NavBar
**/

const NavBar = (props) => {


  return(
    <div className = "navbar" >
        <ul className = "navbarmenu">
            <li><NavLink to = '/'>Home        </NavLink></li>
            <li><NavLink to = 'About-us'>About Us    </NavLink></li>
            <li><NavLink to = 'Contact-us'>Contact Us  </NavLink></li>
            <li><NavLink to = 'Post'>Posts       </NavLink></li>

        </ul>

    </div>
   )

 }

export default NavBar