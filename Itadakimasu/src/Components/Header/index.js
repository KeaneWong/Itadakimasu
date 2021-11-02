import React from 'react'
import {useState, useEffect} from 'react'
import './style.css';
import LogoImage from '../LogoImage';

import { useRef } from 'react';
import { useOnClickOutside } from './hooks';

import BurgerMenu from '../Icons/burgersvg'
import MediaLinks from '../Links';
import SearchButton from '../Icons/SearchButton/SearchButton';
import Burger from '../Burger'
import Menu from '../Menu'

import { createBrowserHistory } from 'history';

/**
* @author
* @function Header
**/


const Header = (props) => {

      //Burger button thing, when click away
      const [open, setOpen] = useState(false);
      const node = useRef();
      useOnClickOutside(node, () => setOpen(false));

      //Burger button thing, when navigating away CURRENTLY NOT WORKING
      let history = createBrowserHistory();
      let location = history.location;
      let unlisten = history.listen(({ location, action }) => {
        setOpen(false);
        // The current location changed.
      });

      //Header color changer
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
    <header className = {headerColor ? "header colorChange" : "header" } >
        <div className = "specialFlexItem" ref = {node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <div className = 'specialFlexItem2'>
            <LogoImage />
        </div>
        <div className = 'specialFlexItem1'>
            <MediaLinks width = '24px' style = {{display: "inline", textAlign: "right", paddingRight:"15px",borderRight: "solid 1px #e9e9e9"}}/>
           
            <SearchButton style = {{display:"inline", paddingLeft:"15px"}}/>
        </div>
    
    </header>
   )

 }

export default Header