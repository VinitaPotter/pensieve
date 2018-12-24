import React, { Component } from 'react'
import './login.css';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class Signin extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange =(e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

  render() {
      const { authError, auth } = this.props;
      if(auth.uid) return <Redirect to='/' />
    return (
        <div className="container valign-wrapper row ">
        <div className="col box s6 card center">
        <div className="card-content">
            <form onSubmit={this.handleSubmit}>
            <span className="card-title">Login</span>
                <div className="input-field s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input type="email" id="email" onChange={this.handleChange}/>
                    <label htmlFor="email">User Name</label>
                </div>
                <div className="input-field s6">
                    <i className="material-icons prefix">visibility_off</i>
                    <input id="password" type="password" onChange={this.handleChange}/>
                    <label htmlFor="password">Password</label>
                </div>
                <button className="btn">Sign In</button>
                <div className="red-text center">
                { authError ? <p className="section">{authError}</p> : null}
                </div>
                <br></br>
                <br></br>
                <Link to="/register">New user? register here!!</Link>
            </form>
            </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps =(state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
