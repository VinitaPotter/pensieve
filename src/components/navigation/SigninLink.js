import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'
// import Profile from '../user/Profile';

const SigninLink = (props) => {
    return (
      <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create"><i className="material-icons">add</i></NavLink></li>
            <li><NavLink to="/posts">My posts</NavLink></li>
            <li><a href="/" onClick={props.signOut}>Logout</a></li>
            <li><NavLink to="/profile" className=" btn btn-floating"> {props.profile.initial} </NavLink></li>
        </ul>
      </div>
    )
  }

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SigninLink)
