import React from 'react'
import Card from '../../Components/UI/Card'
import './style.css'
import PostCard from '../../Components/PostCard'
import {useState, useEffect, useRef} from 'react' 
import { SizeMe } from 'react-sizeme'
import StackGrid, { transitions, easings } from "react-stack-grid";
import Loader from "react-loader-spinner";
import { async } from 'q'
import PageFooter from '../../Components/PageFooter'

/**
* @author
* @function PostList
**/

const imagesLoaded = require('imagesloaded');

const transition = transitions.scaleDown;

//Notes; 
//Postlist will use useeffect to call fetch() on the express server which will then send data from x number of blogposts
//which will contain title, breif description, and ID number for routing. These will then be passed to PostCard and used
//to generate snippets of recipes that can be used to nav to the recipe.

const PostList = (props) => {

  const [postData, setPostData] = useState([]);
  
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    
    //code that gets every post's metadata
    const url = "/posts"
    fetch(url)
    .then(response=>response.json())
    .then(json => {
      console.log("Yo what the up my goo", json);

      //setting the postData to our result
      setPostData(json);


      Promise.all(json.map(async post =>{
        const imgUrl = `/postText/${post.image}`
        
        const response = await fetch(imgUrl);
        const result = await response.blob();
        console.log("result is ", result);
        const imageObjectUrl = await URL.createObjectURL(result);


        console.log("Image Object url: ",imageObjectUrl);
        post.image = imageObjectUrl;

       

      }) )
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))

      
    })
    .catch(err => console.log("Failed to load: ",err))
    
  }, []);

  


  return(

        <div className = "PostList"  >
      {imgsLoaded ? (
          <StackGrid
                monitorImagesLoaded = {true}
                columnWidth={290}
                duration={900}
                gutterWidth={35}
                gutterHeight={15}
                easing={easings.cubicOut}
                appearDelay={60}
                appear={transition.appear}
                appeared={transition.appeared}
                enter={transition.enter}
                entered={transition.entered}
                leaved={transition.leaved}
                
          >
          
            {postData.map(curPost => ( 
                <PostCard
                
                title = {curPost.title}
                description = {curPost.description}
                tags =  {curPost.tags}
                date = {curPost.date}
                id = {curPost.id}
                author = {curPost.author}
                imgsrc = {curPost.image}
                post_id = {curPost.post_id}
              
                />

              )
            )}
        
        </StackGrid>
      ) : (
        <React.Fragment>
        <div className = 'loaderContainer'>
        <Loader
          type = "Circles"
          color = "#00BFFF"
          height={100} 
          width={100}
        
        
        />
        </div>
        <div className = 'spacer'></div>
        </React.Fragment>
      )}
      
      <PageFooter/>
        </div>

    )
  }

 

export default PostList