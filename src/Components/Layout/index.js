import React from 'react'
import './style.css'
import SideBar from '../SideBar'
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <React.Fragment>
        <div className = "container">
            {props.children}
            <SideBar/>
        </div>
        <div>
            <h1>THIS IS MY FOOTER FOR LAYOUT</h1>
        </div>
    </React.Fragment>
   )

 }

export default Layout