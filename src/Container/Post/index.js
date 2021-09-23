import React from 'react'
import './style.css'
import Card from '../../Components/UI/Card'
import BlogPost from '../../Components/BlogPost'
import SideBar from '../../Components/SideBar'
import Layout from '../../Components/Layout'
/**
* @author
* @function Post
**/

const Post = (props) => {
    console.log(props);
  return(
    
        <Layout>
            <BlogPost {...props}/>
        </Layout>


   )

 }

export default Post