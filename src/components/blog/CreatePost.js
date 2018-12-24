import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postActions'
import { Redirect } from 'react-router-dom'
import './Create.css'


class CreatePost extends Component {
  state= {
    title: "",
    content: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state)
    this.props.history.push("/posts")
  }

  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container center row createbox">
        <form className="col s12" onSubmit={this.handleSubmit} >
        <h3 className="center">Create new post</h3>
        <div className="row">
        <input placeholder="Enter Title" id="title" onChange={this.handleChange}/>
          <div className="input-field col s12">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Start Writing</label>
          </div>
        </div>
        <button className="btn">Create</button>
      </form>          
      </div>
    )
  }
}

const mapStateToProps =(state)=> {
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)