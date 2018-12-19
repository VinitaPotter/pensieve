import React, { Component } from 'react'

class CreatePost extends Component {
  render() {
    return (
      <div className="container">
        <p>Create new post</p>
        <textarea></textarea>
        <button className="btn">Submit</button>
      </div>
    )
  }
}

export default CreatePost
