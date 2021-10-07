import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'
import BlogPost from '../BlogPost'

/**
* @author
* @function PostCard
**/

const PostCard = (props) => {
  return(
 
    <div>
    <Card style = {{marginBottom: '20px'}}>
        <div className = "postImageWrapper">
            <img src = {props.imgsrc}/>
            
        </div>
        <div style= {{textAlign: "center"}}>
            <span>{props.tags}</span>
            <h2>{props.title}</h2>
            <span>posted on {props.date} by {props.author}</span>
            <p style = {{fontStyle: "italic"}} >{props.description}</p>
            
        </div>

    </Card>
    
</div>

   )

 }

export default PostCard