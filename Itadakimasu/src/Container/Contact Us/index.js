import React from 'react';
import emailjs from 'emailjs-com';
import {useEffect, useState} from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import './style.css';
import {Grid, Row, Col} from 'react-bootstrap';
import PageFooter from '../../Components/PageFooter';
const SERVICE_ID = 'service_mg1gurg';
const TEMPLATE_ID = 'template_jqogz9k';
const USER_ID = 'user_mlI39RXrEAZfIsfyJgnMo';

const ContactUs = () => {

  const [submitted, hasSubmitted] = useState(false);


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    //e.target.reset()
    hasSubmitted(true);
}


return (
    <form className="container" onSubmit = {sendEmail}>
      <Row>
          <h1>Contact Us</h1>
      </Row>
      <Row>
          <h4 style={{textAlign:'center'}}>For suggestions and feedback please submit here</h4>
      </Row>
      <Row>
          <h4 style={{textAlign:'center'}}>For general editorial inquiries please email itadakimasu1120@gmail.com </h4>
          <h4 style ={{lineHeight: '0'}}>or use the form below:</h4>
      </Row>
      {submitted ? (
      <h4 className = "love">Thanks! We'll get back to you soon!</h4>

    ) : (
      <Row className = "input-container">
          <Col xs = {12} >
            <div className="styled-input wide">
              <input type="text" required name = "name" />
              <label>Name</label> 
            </div>
          </Col>
          <Col md = {6} sm = {12}>
            <div className="styled-input">
              <input type="text" required name = "email"/>
              <label>Email</label> 
            </div>
          </Col>
          <Col md = {6} sm = {12} >
            <div className="styled-input" style={{float:'right'}}>
              <input type="text" required name = "subject"/>
              <label>Subject</label> 
            </div>
          </Col>
          <Col xs = {12}>
            <div className="styled-input wide">
              <textarea required name = "message"></textarea>
              <label>Message</label>
            </div>
          </Col>
          <Col xs = {12}>
            <input className="btn-lrg submit-btn" type = "submit" value="Submit" ></input>
          </Col>
      </Row>
    )}
    <PageFooter/>
    </form>
    

  );

}
export default ContactUs;