import React from 'react'
import './style.css'
import PicOfUs from '../../blogPostImages/us.jpeg'
import {Grid, Row, Col} from 'react-bootstrap'
import MediaLinks from '../../Components/Links'
import PageFooter from '../../Components/PageFooter'
/**
* @author
* @function AboutUs
**/

const AboutUs = (props) => {
  return(
      
    <div className = "container">
        <h2 className = "headdd">About</h2>
        <Row>
          <Col sqs = {12} span = {12}>
            <img src = {PicOfUs} className = 'mainimg'></img>
          </Col>
        </Row>
        <Row sqs>
            <div className = "spacer"/>
            <Col className = "summaryWrapper" sqs = {6} span = {6}>
                
                    <p className = 'summary'>Alex Tsai, Keane Wong, and Colby Liew are 3 friends from a small suburban town in Southern California. Brought together by their love of food and cooking, the 3 friends decided to put their ideas and thoughts on paper and share their love of food with the world. </p>
            </Col>
            <div className = "spacer"/>
            <MediaLinks/>
            <div className = "spacer"/>
        </Row>
        <PageFooter/>
    </div>
 
   )

 }

export default AboutUs