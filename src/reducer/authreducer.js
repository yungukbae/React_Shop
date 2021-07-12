import {LOGIN_USER, REGISTER_USER, LOGOUT_USER,AUTH_USER } from '../action/type'
const isLoggedIn = {
    status: false
}


export default function (state=isLoggedIn, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...state, AuthResult: action.payload}
    case LOGIN_USER: 
      return {...state , LoginResult: action.payload , status:true};
    case LOGOUT_USER:
      return {...state, LogoutResult: action.payload, status:false};
    case REGISTER_USER:
      return {...state, RegisterResult: action.payload, status:true};
    default:
      return {...state};
  }
}