import React from 'react'
import './style.css'
  import pic1 from "./../../blogPostImages/BanhMi.JPG"   
  import pic2 from "./../../blogPostImages/IMG_2547.JPG"  
  import pic3 from "./../../blogPostImages/porkchop.JPG"  
  import pic4 from "./../../blogPostImages/ramen.jpg"  
  import pic5 from "./../../blogPostImages/TacosBarbacoa.jpg"
  import pic6 from "./../../blogPostImages/ThaiPannacotta.png"
  import pic7 from "./../../blogPostImages/us.jpeg"        
  import pic8 from "./../../blogPostImages/BanhMi.JPG"        

import {Container,Image,  Row, Col} from 'react-bootstrap'
import MediaLinks from '../Links'
/**
* @author
* @function PageFooter
**/
const images1 = [
  { src: pic1,  },
  { src: pic2,  },
  { src: pic3,  },
  { src: pic4   }

];
const images2 = [
  { src: pic5, },
  { src: pic6, },
  { src: pic7, },
  { src: pic8  },
]

const PageFooter = (props) => {
  return(
    <div className = 'PageFoot'>
     
        <h1 className = "Center">
            @itadakimasu.me
        </h1>
        <MediaLinks width = {'70px'} className = "Links"/>
        <div className = "GalleryContainer">
          <Container className = "contain">
            <Row className = "rowgallery">
              {images1.map((image) => (
                <Col className = "columnelement">
                    <img className = 'galleryimg' src = {image.src}></img>
                </Col>
              ))}
            </Row>
            <Row className = 'rowgallery'>
              {images2.map((image) => (
                <Col className = "columnelement">
                    <img className = 'galleryimg' src = {image.src}></img>
                </Col>
              ))}
            </Row>
          </Container>
      </div>
      <div className ='bottomSpacer'>
        
      </div>
    </div>

   )

 }

export default PageFooter