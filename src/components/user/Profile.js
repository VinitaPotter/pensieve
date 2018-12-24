import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Profile extends Component {
  render() {
    const { posts, profile, auth } = this.props;
    if(posts && auth.uid){
      return (
        <div className="container valign-wrapper">
            <div className="card horizontal small"> 
                <div className="card-image">
                  <img src="https://www.usmagazine.com/wp-content/uploads/sorcerers-stone-f4ad5f4c-420b-434d-bc38-9a3bd05b3131.jpg" alt="" />
                  <span className="card-title text-center">{profile.name}</span>
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                      <p>Name: <span className="pink-text">{profile.name}</span></p>
                      <p>Email: <span className="pink-text">{auth.email}</span></p>
                      <p>Total blogs:<span className="pink-text"> {posts.length}</span></p>
                  </div>
                </div>
            </div>
        </div>
      )
    } else{
      return(
        <div className="container">
        <p>No user data found</p></div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
      posts: state.firestore.ordered.posts,
      profile: state.firebase.profile,
      auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: "posts" }
  ])
  )(Profile)
