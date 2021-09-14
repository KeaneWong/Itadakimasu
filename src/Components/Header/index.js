import React from 'react'
import {useState, useEffect} from 'react'
import './style.css';
import LogoImage from '../LogoImage';


import MediaLinks from '../Links';
import SearchButton from '../Icons/SearchButton/SearchButton';
/**
* @author
* @function Header
**/


const Header = (props) => {
        const[headerColor, setHeaderColor] = useState(false);
        const changeHeaderColor = () => {
            if (window.scrollY < 40) {
              return setHeaderColor(false);
            } else if (window.scrollY >= 40) {
              return setHeaderColor(true);
            }
          };

        window.addEventListener('scroll',changeHeaderColor)
  return(
    <header className = {headerColor ? "header colorChange" : "header" }>
        <div className = 'specialFlexItem'>
            <nav className = "headerMenu">
                <a href = "#">Home</a>
                <a href = "#">About Us</a>
                <a href = "#">Contact Us</a>
                <a href = "#">Post</a>
            </nav>
        </div>
        <div className = 'specialFlexItem'>
            <LogoImage />
        </div>
        <div className = 'specialFlexItem1'>
            <MediaLinks style = {{display: "inline", textAlign: "right", paddingRight:"15px",borderRight: "solid 1px #e9e9e9"}}/>
           
            <SearchButton style = {{display:"inline", paddingLeft:"15px"}}/>
        </div>
    </header>
   )

 }

export default Header