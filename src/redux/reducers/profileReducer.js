import { AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    USER_EXIST,
   SET_CURRENT_USER
  } from '../actions/types';
  
  const INITIAL_STATE = { userExist: '', error: '', message: '', user: '', 
  content: '', authenticated: false };
  
  function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
  case AUTH_USER:
    return { ...state, error: '', message: 'Successfully registered', 
  authenticated: true };
  case UNAUTH_USER:
    return { ...state, authenticated: false };
  case AUTH_ERROR:
    return { ...state, error: action.payload };
  case USER_EXIST:
    return { ...state, error: action.error };
  case SET_CURRENT_USER:
    return { ...state, user: action.user };
  default:
    return state;
    }
  }
  
  export default authReducer;