import React, {Component} from 'react';
import SigninLink from './SigninLink'
import SignoutLink from './SignoutLink'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Navbar extends Component {

  handleClick = (e) => {
    e.preventDefault();
    alert("Working on this functionality! Keep patience :)")
  }


  render() {  
  const { auth, profile } = this.props;
  const links = auth.uid ? <SigninLink profile={profile}/> : <SignoutLink />
    return (
      <div>
         <nav className="teal">
            <div className="nav-wrapper">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger" onClick={this.handleClick}><i className="material-icons" >menu</i></a>
              <Link to="/" className="brand-logo center">Pensieve</Link>
              <div className="hide-on-med-and-down">
              {links}
              </div>
            </div>
            <ul className="sidenav" id="mobile-demo">
            {links}
            </ul>
          </nav>
          
      </div>
    )
  }
}

  const mapStateToProps =(state)=> {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }


export default connect(mapStateToProps)(Navbar)
