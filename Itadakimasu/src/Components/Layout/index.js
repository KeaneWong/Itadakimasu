import React from 'react'
import './style.css'
import SideBar from '../SideBar'
import PageFooter from '../PageFooter'
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <React.Fragment>
        <div className = "container1">
            {props.children}
            <SideBar/>
        </div>
        <PageFooter/>
    </React.Fragment>
   )

 }

export default Layout