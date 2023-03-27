import React from 'react'
import SideBarView from '../views/sideBarView'
import { useSelector } from'react-redux'

export default function SideBar(props) {
  return (
    <SideBarView user={props.user.currentUser} loading={props.user.loading} error={props.user.error}/>
  )
}