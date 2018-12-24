import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'


const Dashboard = (props) => {
    const { auth } = props;
    if(auth.uid) return <Redirect to='/home' />
        return (
            <div>
              <div className="container">
                  <div className="row">
                      <div className="col s12 m6 section">
                          <h4>What everyone is saying..</h4>
                              <div className="section">
                                  <div className="chip">
                                  <img src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2017/06/01.jpeg" alt="Contact Person"/>
                                  Dobby says:
                                  </div>                            
                                  <p>Harry...Potter...</p>
                              </div>
                              <div className="divider"></div>
                              <div className="section">
                                  <div className="chip">
                                  <img src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2017/06/02.jpg" alt="Contact Person"/>
                                  Gellert Grindelwald says:
                                  </div> 
                                  <p>A law that has us scuttling like rats in the gutter. A law that demands that we conceal our true nature. A law that directs those under its dominion to cower in fear, lest we risk discovery. I ask you, Madam President, I ask all of you — who does this law protect? Us, or them? I refuse to bow down any longer.</p>
                              </div>
                              <div className="divider"></div>
                              <div className="section">
                                  <div className="chip">
                                  <img src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2017/06/09.jpg" alt="Contact Person"/>
                                  Dolores Umbridge says:
                                  </div> 
                                  <p>Things at Hogwarts are far worse than I feared</p>
                              </div>
                              <div className="divider"></div>
                      </div>
                      <div className=" container col s12 m4 offset-s2 valign-wrapper center">
                        <div className="teal-text">
                        <p className="flow-text">Express yourself!!</p>
                        <p>Have something interesting to say? <Link to="register">Sign Up</Link> here!</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
          )
        }

        const mapStateToProps =(state) => {
            return {
                auth: state.firebase.auth
        
            }
        }
        
        const mapDispatchToProps = (dispatch) => {
            return{
                signIn: (creds) => dispatch(signIn(creds))
            }
        }
        
        export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
