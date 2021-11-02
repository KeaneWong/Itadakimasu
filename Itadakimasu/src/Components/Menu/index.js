import React from 'react';
import { bool } from 'prop-types';
import './style.css'
import { StyledMenu } from './Menu.styled';
import {NavLink} from 'react-router-dom';
import MediaLinks from '../Links';
const Menu = ({ open }) => {


  return (
    <StyledMenu open={open}>
      <div className = "LinksColumn">
        <div className = "LinksWrapper">
          <div className = "NavBar">
            <div className = 'love'><NavLink className = "LinkNav"  to = '/'>Home      </NavLink>      </div>
            <div className = 'love'><NavLink className = "LinkNav"  to = '/About-us'>About Us</NavLink>       </div>
            <div className = 'love'><NavLink className = "LinkNav"  to = '/Contact-us'>Contact Us  </NavLink> </div>
          </div>
          <div className = "MediaQuote"> 
            <MediaLinks className = "SocLinks"/>
            <div className = "Quote">
              Itadakimasu is a culinary collaboration exploring the beauty of food and every shape it can take.
            </div>
          </div>

        </div>
      </div>
      <div className = "SuperQuote">
        <div className = "SuperQuoteBox">
          <div>
   
              “Cooking is about passion, so it may look slightly temperamental in a way that it’s too assertive to the naked eye.”
          
         </div>
          <div>
 
              — Gordon Ramsay

          </div>
        </div>
      </div>
    </StyledMenu>

  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
