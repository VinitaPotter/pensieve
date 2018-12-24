import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

const BlogPost = (props) => {
  const { post } = props;
    if(post){
      return (
        <div className="container">
          <div>
            <h1 className="text-center">{post.title}</h1>
            <p>{post.content}</p>
          </div>
          <div className="divider"></div>
          <div className="grey-text darken-3">
            <p>Posted By {post.authorName}</p>
            <p>Posted {moment(post.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
          )
    } else {
      return(
        <div className="container">
          <p className="flow-text center teal-text">Loading Projects..</p>
        </div>
      )
    }
  }

  const mapStateToProps =(state, ownProps) => {
    const id= ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id]: null;
    return {
      post: post
    }
  }

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: "posts"}
  ])
)(BlogPost)
