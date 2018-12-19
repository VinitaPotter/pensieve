import React, { Component } from 'react';
import SigninLink from './SigninLink'
import SignoutLink from './SignoutLink'

class Navbar extends Component {
  render() {
    return (
      <div>
         <nav className="teal">
            <div className="nav-wrapper">
              <a href="/home" className="brand-logo center">Pensieve Blog</a>
                  <SigninLink />
                  <SignoutLink />
            </div>
          </nav>
      </div>
    )
  }
}

export default Navbar
