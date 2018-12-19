import React, { Component } from 'react'

export class SigninLink extends Component {
  render() {
    return (
      <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/create">Create New</a></li>
            <li><a href="/Profile">Account</a></li>
            <li><a href="/">Logout</a></li>
        </ul>
      </div>
    )
  }
}

export default SigninLink
