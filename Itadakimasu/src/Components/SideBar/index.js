import React, {useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card'
import PicOfUs from '../../blogPostImages/us.jpeg'
import blogPost from '../../Data/blog.json'
import {NavLink} from 'react-router-dom';
/**
* @author
* @function SideBar
**/

const SideBar = (props) => {

    const[posts, setPosts] = useState([]);
    
    useEffect(() =>
    {
        const posts = blogPost.data
        setPosts(posts);
    }, [posts]);
    console.log(posts);

  return(
      <div className = "sidebarContainer" style = {{
          width:props.width
      }}>
            <Card style = {{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
            <div className = 'cardHeader'>
                <span>about us</span>
                <div className = "profileImageContainer">
                    <img src = {PicOfUs} alt = "Picture of Us"/>
                </div>
                <div className = 'cardBody'>
                    <p className = "personalBio">Alex Tsai, Keane Wong, and Colby Liew are 3 friends from a small suburban town in Southern California. Brought together by their love of food and cooking, the 3 friends decided to put their ideas and thoughts on paper and share their love of food with the world. </p>
                </div>
                
            </div>
            </Card >
            <Card style = {{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
            <div className = 'cardHeader'>
                <span>social network</span>

                
            </div>
            </Card>
            <Card style = {{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
                <div className = 'cardHeader'>
                    <span>Recent Posts</span>
                </div>
                
                <div className = "recentPosts">   
                {
                    posts.map(post => {
                            return (
                                //<NavLink to = {`/posts/${post.id}`}>
                                <a href = {`/posts/${post.id}`}>
                                    <div className = "recentPost">
                                    <h3 >{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                    </div>
                                </a>
                                //</NavLink>
                            );
                        })
                }
                </div>
            </Card>
      </div>

   )

 }

export default SideBar