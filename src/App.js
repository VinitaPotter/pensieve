import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import SignIn from './components/login/Signin';
import Register from './components/login/Register';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import CreatePost from './components/blog/CreatePost';
import Profile from './components/user/Profile'
import Footer from './components/navigation/Footer'
import Dashboard from './components/home/Dashboard'
import MyPosts from './components/user/MyPosts'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={BlogList} />
          <Route path="/posts" component={MyPosts} />
          <Route path="/post/:id" component={BlogPost} />
          <Route path="/create" component={CreatePost} />
          <Route path="/profile" component={Profile} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
