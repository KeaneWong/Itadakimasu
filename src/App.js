import React from 'react';
import './App.css';
import Home from './Container/Home';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ContactUs from './Container/Contact Us'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Post from './Container/Post';
import PostList from './Container/PostList/PostList';
function App() {
  return (
    <Router>
    <Header className = 'headBanner'/>
    <div className="App">

      <Hero />

      <Route path = '/' exact component = {Home}/> 
      <Route path = '/contact-us' component = {ContactUs} />
      <Route path = '/post/' component = {PostList}/>
      <Route path = '/post/:postId' component = {Post} />
    </div>
    </Router>


  );
}

export default App;
