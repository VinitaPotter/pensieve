import React, { Component } from 'react'
import './login.css'

class Register extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="card s6 center">
            <form className="card-content">
            <span class="card-title">Register</span>
                <div className="input-field ">
                    <label>Name</label>
                    <input type="text" id="Name"/>
                </div>
                <div className="input-field">
                    <label>Email</label>
                    <input type="email" id="username"/>
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" id="Password"/>
                </div>
                <div className="input-field">
                    <label>Confirm Password</label>
                    <input type="password" id="ConfirmPassword"/>
                </div>
                <button className="btn">Submit</button>
                <br></br>
                <br></br>
                <a href="/">Already have an account?</a>
            </form>
            </div>
            </div>
        </div>
    )
  }
}

export default Register
