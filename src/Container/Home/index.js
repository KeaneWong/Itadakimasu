import React from 'react';
import './style.css';
import SideBar from '../../Components/SideBar';
import Card from '../../Components/UI/Card';
import RecentPosts from './Recent Posts';

import blogData from '../../Data/blog.json'
import Layout from '../../Components/Layout';

const SideImage = props => {
    return (
        <div style = {{height: `${props.height}px` }}>
            <img src = {props.src} style = {{width: "100%"}}/>
        </div>
    )

}

const ImageGallery = props => (
    
        <div className = "GalleryPost" style = {props.galleryStyle}>
         
         <section className = 'mainImageWrapper'style = {{width: props.largeWidth}}>
             <div>
                 <img src = {'../../blogPostImages/'+props.imagesArray[0]} style = {{width: '100%'}}/>
             </div>
         </section>
         <section className = "SideImageWrapper" style = {{width: props.smallWidth}}>
        
             {
            
                 props.imagesArray.map(function(image, indexname, imagesArray){
                    if(image != imagesArray[0])
                    {
                        return (
                        <SideImage 
                        height = {props.sideImageHeight} 
                        src = {'../../blogPostImages/'+ (image)}
                        alt = ""/>
                        )
                    }
                }
                )
             }
         </section>
         </div>


);

const Home = props => {
    
    const GalleryHeight = 450;
    const GalleryStyle = {
        height: GalleryHeight+'px',
        overflow: 'hidden'

    }
    const SideImageHeight = GalleryHeight/3;

    const imgAr = blogData.data.map(post =>post.blogImage);
    const img = require('../../blogPostImages/ThaiPannacotta.png');
    console.log(imgAr);

    return (
        <div>
            <Card >
               <ImageGallery
               largeWidth = "70%"
               smallWidth = '30%'
               sideImageHeight = {SideImageHeight}
               galleryStyle = {GalleryStyle}
               imagesArray = {imgAr}
               /> 
            </Card>

                <Layout >
                    <RecentPosts style = {{width: '70%'}}/>
                </Layout>
                

        </div>
    );
}

export default Home;