import React from 'react'
import './style.css';
import Main_Logo from '../../Assets/Main_Logo.png';
/**
* @author
* @function LogoImage
**/

const LogoImage = (props) => {
  return(
    <div>
        <img alt = "Logo" src = {Main_Logo}/>
    </div>
   )

 }

export default LogoImage