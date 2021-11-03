import React from 'react';
import './App.css';
import Home from './Container/Home';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ContactUs from './Container/Contact Us'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Post from './Container/Post';
import PostList from './Container/PostList/PostList';
import AboutUs from './Container/AboutUs';
function App() {
  return (
    <Router basename="/">
    <Header className = 'headBanner'/>
    <div className="App">

  
    
      <Route exact path = '/' component = {PostList}/> 
      <Route path = '/contact-us' component = {ContactUs} />
      <Route path = '/about-us' component = {AboutUs} />
      <Route path = '/posts/:postId' component = {Post} />
    </div>
    </Router>


  );
}

export default App;
