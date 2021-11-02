import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import './style.css'
import BlogPost from '../BlogPost'
import {NavLink} from 'react-router-dom';

/**
* @author
* @function PostCard
**/

const PostCard = (props) => {
    
    /*//working (?) code, use this one instead of the block below if the changes to postlist dont work out
    const[postImage,setPostImage] = useState();
    
    useEffect(() => {
        const url = `http://localhost:5000/postText/${props.imgsrc}`
    
        const fetchData = async() =>{
          try {
            const response = await fetch(url);
            const result = await response.blob();
            const imageObjectURL = URL.createObjectURL(result);
            console.log("Yo what is up my goo", result);
            setPostImage(imageObjectURL);
          }
          catch(error){
            console.log("Error: ", error);
          }
        }
    
    
        fetchData();
    
    
    
      }, []);*/

/*
      fetch(imgUrl)
                .then((res) => res.blob())
                .then((result) => {
                    console.log(result);
                    const imageObjectURL = URL.createObjectURL(result);
                    setPostImage(imageObjectURL);
                })
                .catch((error) => {
                    console.log( error );
                })
*/

  return(

    
    <div style = {{width: '100%'}}>
    <Card style = {props.style} className = 'postcard'>
        <div className = "postImageWrapper">
            <NavLink className = "Navl" to = {`/posts/${props.post_id}`} >      
                <img src = {props.imgsrc}/>
            </NavLink>
        </div>
        <div style= {{textAlign: "center", position: 'relative', padding: '8%'}}>
            <div className = 'datecircle'>
                <div className = 'dateWrapper'>
                    
                    <div className = 'month'>{props.date.substring(0,3)}</div>
                    <div className = 'day'>{props.date.substring(props.date.search(/\d/),props.date.search(/\d/)+2)}</div>
                </div>
            </div>
            
            <div className = 'title' ><NavLink className = "Navl" to = '33'>{props.title}</NavLink></div>
            <div><NavLink className = "Navl" to = '33'>{props.tags}</NavLink></div>
            <span>by {props.author} </span>
            <p style = {{fontStyle: "italic"}} >{props.description}</p>
            
        </div>

    </Card>
    
</div>

   )

 }

export default PostCard