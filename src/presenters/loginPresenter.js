import React from 'react'
import LoginView from '../views/loginView'
import ProfileView from '../views/profileView'
import { loginAction, signInAction, logOutAction } from '../redux/actions/loginAction'
import store from "../redux/store"

export default function Login(props) {

  function logInACB(email, password) {
    store.dispatch(loginAction(email, password))
  }

  function signInACB(email, password) {
    store.dispatch(signInAction(email, password))
  }

  function logOutACB() {
    store.dispatch(logOutAction())
  }

  function isUser() {
    if (props.currentUser && props.currentUser !== {} && Object.keys(props.currentUser).length)return true
    return false
  }

  function translateCodeError(errorCode) { 
    if (errorCode.includes("auth/invalid-email")) return "The email address is badly formatted. Don't forget '@'."
    if (errorCode.includes("auth/weak-password")) return "The password should be at least 6 characters."
    if (errorCode.includes("auth/wrong-password")) return "The password is invalid (or the user does not have a password)."
    if (errorCode.includes("auth/internal-error")) return "Internal Error."
    if (errorCode.includes("auth/email-already-in-use")) return "User with this email is already exist."
    return "An error occured, please retry (Firebase error: " + errorCode + ")."
  }

  return (
    <>
      {isUser() ? 
      <ProfileView logOut={logOutACB} currentUser={props.currentUser}/>
      :
      <LoginView error={props.error} logIn={logInACB} signIn={signInACB} translateCodeError={translateCodeError}/>}
    </>
  )
}