import React, {useState, useEffect} from 'react'
import './style.css'
import Card from '../UI/Card'
import Bepis from '../../blogPostImages/TacosBarbacoa.jpg'
import blogPost from '../../Data/blog.json'
/**
* @author
* @function BlogPost
**/



const BlogPost = (props) => {
    
    const[post, setPost] = useState({
        id:"",
        blogCategory:"",
        blogTitle: "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText: ""
    });//these two variables are to be used in the program, while the corresponding functions are used in usestate and useeffect
    const[postId,setPostId] = useState("");



    useEffect(() =>
    {
        const postId = props.match.params.postId;   //props.match.params.postId is the /urltag that we add to the url after 'itadakimasu.me/post'
                                                    //match.params is the parts of the url that are dynamic i.e changing (denoted with a ':' in app.js as 'postId' for this website)
                                                    //this was passed to us as a prop by the parent, app.js
        const post = blogPost.data.find(post=>post.id==postId);
        setPost(post);      //on update to post or url, we set the current displayed post to be the post we found using the postid we got from the dynamic url
        setPostId(postId);  //on update, we rewrite the postId value to be used later in the program.
    }, [post,props.match.params.postId]);//tells the useeffect to do its thing when post or the dynamic part of the url is updated
   
    if(post.blogImage == "") return null;//should fix the require function ./undefined error but didnt
   
    console.log(post);

  return(
        //NOTICE: Replace the src = {} with a src = {require()}. Might cause problems while bundling. Still unresolved
        <div className = "blogPostContainer">
            <Card>
                <div className = "blogHeader">
                    <span className = "blogCategory">{post.blogCategory}</span>
                    <h1 className = "postTitle">{post.blogTitle}</h1>
                    <span className = 'postedBy'>posted on {post.postedOn} by {post.author}</span>
                </div>


                <div className = "postImageContainer">
                    <img src = {`../../blogPostImages/${post.blogImage}`} alt = "Post Image" />
                </div>
                <div className = 'postContent'>
                    <p>{post.blogText}</p>
                </div>
            </Card>
        </div>


   )

 }

export default BlogPost