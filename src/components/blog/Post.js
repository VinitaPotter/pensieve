import React  from 'react'
import { Link } from 'react-router-dom';



const Post = ({ post }) => {
    return (
      <div>
        <div className="section">
                <span className="card-title center teal-text">{post.title}</span>
                <p className="truncate grey-text darken-4">{post.content}</p>
                <Link to={'/post/' + post.id} key={post.id}>
                <p>Read More..</p>
                </Link>
        </div>
        <div className="divider"></div>
      </div>
    )
  }


export default Post
