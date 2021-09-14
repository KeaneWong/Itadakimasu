import React from 'react'
import MailSVG from '../Icons/mailsvg.js';
import TwitterSVG from '../Icons/twittersvg.js';
import InstaSVG from '../Icons/instasvg.js';
/**
* @author
* @function MediaLinks
**/

const MediaLinks = (props) => {
  return(
    <nav className = 'SocialMediaLinks' style = {props.style}>
                <a href = "mailto:itadakimasu1120@gmail.com"  className = 'IconLink' target = '_blank'>
                    <MailSVG/>
                
                </a>
                <a href = "https://twitter.com/itadakimasuMe" className = 'IconLink' target = '_blank'>
                    <TwitterSVG />
                </a>
                <a href = "https://www.instagram.com/itadakimasu.me/" className = 'IconLink' target = '_blank'>
                    <InstaSVG />
                </a>

    </nav>
   )

 }

export default MediaLinks