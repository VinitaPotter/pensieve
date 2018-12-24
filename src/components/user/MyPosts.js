import React, { Component } from 'react'
import Post from '../blog/Post'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';


class MyPosts extends Component {
  render() {
      const { posts, auth } = this.props;
      if(!auth.uid) return <Redirect to='/signin' />
        return (
        <div className="container">
            <div className="z-depth-0" >
                { posts && posts.map(post => {
                    if(post.authorID === auth.uid){
                    return (
                        <div className="card hoverable z-depth-0">
                        <div className="card-content">
                             <Post post={post} key={post.id}/>
                         </div>
                         </div>
                        )
                    }
                    })}
                </div>
            </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "posts" }
    ])
    )(MyPosts)
