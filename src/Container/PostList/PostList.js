import React from 'react'
import Card from '../../Components/UI/Card'
import PostCard from '../../Components/PostCard'
import {useState, useEffect} from 'react' 
import StackGrid from "react-stack-grid";

/**
* @author
* @function PostList
**/



//Notes; 
//Postlist will use useeffect to call fetch() on the express server which will then send data from x number of blogposts
//which will contain title, breif description, and ID number for routing. These will then be passed to PostCard and used
//to generate snippets of recipes that can be used to nav to the recipe.

const PostList = (props) => {

  const [postData, setPostData] = useState([]);

  const Omakase = "Omakase";
  const Date = "Sep 27 2021";

  useEffect(() => {
    const url = "http://localhost:5000/posts"

    const fetchData = async() =>{
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("Yo what is up my goo", json);
        setPostData(json);
      }
      catch(error){
        console.log("Error: ", error);
      }
    }


    fetchData();



  }, []);


  return(
    <div className = "PostList"  >
      <StackGrid
        columnWidth = "30%"
        className = "Grid"
        monitorImagesLoaded = "true"
      >
      {
        postData.map((curPost) => ( 
          <PostCard
          title = {curPost.title}
          description = {curPost.description}
          tags =  {curPost.tags}
          date = {curPost.date}
          id = {curPost.id}
          author = {curPost.author}
          imgsrc = {curPost.imgsrc}
          />
        )
      )}

      </StackGrid>
    </div>
    )
  }

 

export default PostList