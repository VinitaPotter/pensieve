import React, { Component } from 'react'

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="card"> 
        <p className="center">Profile</p>
            <div className="card-image" width="50px">
                <img src="https://reactjs.org/logo-og.png" alt="" />
                <span className="card-title text-center">My info</span>
            </div>
            <div className="card-content">
                <p>Name: </p>
                <p>Username: </p>
                <p>Total Blogs: </p>
                <p>Joining date: </p>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Profile
