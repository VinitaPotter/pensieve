import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import Notifications from './Notifications';
import moment from 'moment'



class BlogList extends Component {
  render() {
      const { posts, auth, notifications} = this.props;
      if(!auth.uid) return <Redirect to='/signin' />
        return (
        <div className="container">
            <div className="row">
                <div className="col s12 m9 section">
                { posts && posts.map(post => {
                    return (
                       <div className="card hoverable">
                       <div className="card-content">
                           <p className=" grey-text">{post.authorName} on {moment(post.createdAt.toDate()).calendar()}</p>
                            <Post post={post} key={post.id}/>
                        </div>
                        </div>
                    ) 
                }
                )}
                </div>
            
            <div className="col s12 m3">
                <Notifications notifications={notifications} />
            </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "posts", orderBy: ['createdAt', 'desc'] },
        { collection: "notifications", limit: 7, orderBy: ['time', 'desc'] }
    ])
    )(BlogList)
