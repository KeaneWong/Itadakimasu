import React, {useState, useEffect} from 'react'
import './style.css'
import Card from '../UI/Card'
import Bepis from '../../blogPostImages/TacosBarbacoa.jpg'
import blogPost from '../../Data/blog.json'
import ReactMarkdown from 'react-markdown'
import marked from "marked";
import Loader from 'react-loader-spinner'
/**
* @author
* @function BlogPost
**/



const BlogPost = (props) => {




    const[post, setPost] = useState({
        post_id:"",
        description:"",
        title: "",
        date: "",
        author: "",
        tags:"",
        text: "",
        image: ""
    });//these two variables are to be used in the program, while the corresponding functions are used in usestate and useeffect
    const[postId,setPostId] = useState("");

    const[postText,setPostText] = useState();
    const[postImage,setPostImage] = useState();
    const[imgLoaded,setImgLoaded] = useState(false);

    
    useEffect(() =>
    {
        //this gets the metadata for post
        function GetMetadata(){
            const PostId = props.match.params.postId;   //props.match.params.postId is the /urltag that we add to the url after 'itadakimasu.me/post'
                                                        //match.params is the parts of the url that are dynamic i.e changing (denoted with a ':' in app.js as 'postId' for this website)
                                                        //this was passed to us as a prop by the parent, app.js
            //const post = blogPost.data.find(post=>post.id==postId);
            const url = `/posts/${PostId}`;
            console.log(url);
            fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log('parsed json', json[0]) // access json.body here
                setPost(json[0]);
                setPostId(PostId);
                return json;
            })
            .then((json) =>{
                const textUrl = `/postText/${json[0].text}`;
                console.log(textUrl);
                fetch(textUrl)
                .then(res=>{
                    return res.text();
                })
                .then((result) => {
                    //console.log(result);
                    setPostText(result);
                })
                .catch((error) => {
                    console.log( error );
                });

                const imgUrl = `/postText/${json[0].image}`;
                console.log(imgUrl);
                fetch(imgUrl)
                .then((res) => res.blob())
                .then((result) => {
                    console.log(result);
                    const imageObjectURL = URL.createObjectURL(result);

                    setPostImage(imageObjectURL);
                    setImgLoaded(true);
                })
                .catch((error) => {
                    console.log( error );
                })
                //console.log(`ImgURL: ${imgUrl}`);
            })
            
        };
        GetMetadata();

       /* function WaitOnMetadata() {
            return Promise.all([GetMetadata()]);

        };

        WaitOnMetadata()
        .then(([json]) => {
            console.log("Step 2:",json);
            const textUrl = `http://localhost:5000/postText/${post.text}`;
            fetch({textUrl})
            .then((res) => res.json())
            .then((result) => {
                setPostText({result });
            })
        
            console.log(`TextURL: ${textUrl}`);


            const imgUrl = `http://localhost:5000/postText/${post.image}`;
            fetch({imgUrl})
            .then((res) => res.json())
            .then((result) => {
                setPostImage({result});
            })
            console.log(`ImgURL: ${imgUrl}`);
            
        })*/




        
       
        

    }, []);//tells the useeffect to do its thing when post or the dynamic part of the url is updated
   


    /*
        const fetchData = async() =>{
            try {
              const response = await fetch(url);
              const jsonPost = await response.json();
              //console.log("Yo what is up my goo", json);
              setPost(jsonPost);      //on update to post or url, we set the current displayed post to be the post we found using the postid we got from the dynamic url
              console.log(jsonPost);
              setPostId(PostId);  //on update, we rewrite the postId value to be used later in the program.

            }
            catch(error){
              console.log("Error: ", error);
            }
        }
        fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log('parsed json', json) // access json.body here
            setPost(json[0]);
            setPostId(PostId);
        })
    */
    //if(post.blogImage == "") return null;//should fix the require function ./undefined error but didnt
   
    //console.log(post);

  return(
        //NOTICE: Replace the src = {} with a src = {require()}. Might cause problems while bundling. Still unresolved
        <div className = "blogPostContainer">
            <Card>

                <div className = "postImageContainer">
                    <img src = {postImage} alt = "Post Image" />
                </div>        
                <div className = "blogHeader">
                    <h1 className = "postTitle">{post.title}</h1>
                    <em className = "postDescription">{post.description}</em>
                    <span className = 'postedBy'>posted on {post.date} by {post.author}</span>
                </div>

                <div className = 'postContent'>
                    <ReactMarkdown>{postText}</ReactMarkdown>
                </div>
            </Card>
        </div>


   )

 }

export default BlogPost