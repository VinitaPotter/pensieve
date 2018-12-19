import React, { Component } from 'react'

export class SignoutLink extends Component {
  render() {
    return (
      <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Signin</a></li>
            <li><a href="/Register">Register New</a></li>
        </ul>
      </div>
    )
  }
}

export default SignoutLink
