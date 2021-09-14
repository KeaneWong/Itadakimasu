import React from 'react';
import './App.css';
import Home from './Container/Home';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ContactUs from './Container/Contact Us'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Post from './Container/Post';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Hero />

      <Route path = '/' exact component = {Home}/> 
      <Route path = '/contact-us' component = {ContactUs} />
      <Route path = '/post/:postId' component = {Post} />
    </div>
    </Router>


  );
}

export default App;
