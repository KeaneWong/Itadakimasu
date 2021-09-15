import React from 'react'
import './style.css';
/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className = 'card' style = {{width: props.width ? props.width : "100%", backgroundColor : props.backgroundColor ? props.backgroundColor: "#f0f0f0" }} {...props}>
        {props.children}

    </div>

   )

 }

export default Card