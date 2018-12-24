const initialState = {
  authError: null

}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
    console.log("login failed")
      return {
        ...state,
        authError: "Login Failed"
      }
    case 'LOGIN_SUCCESS':
    console.log("login sucess")
      return{
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCESS':
    console.log("signout sucess")
      return state;
    case 'SIGNUP_SUCESS':
      console.log("signUP sucess")
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log("signUP error")
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  } 

  
  }

export default authReducer
