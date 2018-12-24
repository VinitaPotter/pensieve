import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class SignoutLink extends Component {
  render() {
    return (
      <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/Register">Register</Link></li>
        </ul>
      </div>
    )
  }
}

export default SignoutLink
