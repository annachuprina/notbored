import React from 'react'
import ProfileView from '../views/profileView'
import { logOutAction } from '../redux/actions/loginAction'
import store from "../redux/store"

export default function Profile(props) {
  function logOutACB(){
    store.dispatch(logOutAction())
  }
  return (
    <ProfileView user={props.user} logOut={logOutACB}/>
  )
}