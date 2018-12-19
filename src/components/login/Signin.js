import React, { Component } from 'react'
import './login.css'

class Signin extends Component {
  render() {
    return (
        <div className="container valign-wrapper row ">
        <div className="col box s6 card center">
        <div class="card-content">
            <form>
            <span class="card-title">Login</span>
                <div className="input-field s3">
                    <label>User Name</label>
                    <input type="text" id="username"/>
                </div>
                <div className="input-field s3">
                    <label>Password</label>
                    <input type="password" id="Password"/>
                </div>
                <button className="btn">Submit</button>
                <br></br>
                <br></br>
                <a href="/register">New user? register here!!</a>
            </form>
            </div>
            </div>
        </div>
    )
  }
}

export default Signin
