import React, { Component } from 'react'
import './login.css';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class Register extends Component {
    state= {
        name: "",
        email: "",
        confirmedPassword: "",
    }

    handleChange =(e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)

    }

  render() {
    const { authError, auth } = this.props;
    console.log(auth.emailVerified)
    if(auth.uid) return <Redirect to='/' />
    return (
        <div className="container valign-wrapper row ">
        <div className="col box s6 card center">
        <div className="card-content">
            <form onSubmit={this.handleSubmit}>
            <span className="card-title">Register</span>
                <div className="input-field ">
                    <i className="material-icons prefix">account_circle</i>
                    <input type="text" id="name" aria-required="true" onChange={this.handleChange}/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input htmlFor="email" type="email" id="email" className="validate" aria-required="true" onChange={this.handleChange}/>
                    <label htmlFor="email">Email</label>
                    <span className="helper-text" data-error="wrong" data-success="right"></span>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">visibility</i>
                    <input type="password" id="password" aria-required="true"/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">visibility_off</i>
                    <input type="password" id="confirmedPassword" aria-required="true" onChange={this.handleChange}/>
                    <label htmlFor="confirmedPassword">Confirm Password</label>
                </div>
                <button className="btn">Sign Up</button>
                <div className="red-text center">
                { authError ? <p className="section">{authError}</p> : null}
                </div>
                <br></br>
                <br></br>
                <Link to="/signin">Already have an account?</Link>
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
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
