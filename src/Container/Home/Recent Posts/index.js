import React from 'react'
import './style.css'
import Card from '../../../Components/UI/Card'
/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style = {props.style}>
    <Card style = {{marginBottom: '20px'}}>
        <div className = "postImageWrapper">
            <img src = {'../../../blogPostImages/ThaiPannacotta.png'}/>
            
        </div>
        <div style= {{textAlign: "center"}}>
            <span>Featured</span>
            <h2>Thai Pannacotta</h2>
            <span>posted on July 22, 2022 by Keane Wong</span>
            <p>Berries and cream</p>
            <button>Read More</button>
        </div>

    </Card>
    
</div>
   )

 }

export default RecentPosts