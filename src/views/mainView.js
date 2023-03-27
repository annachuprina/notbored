import React from 'react'
import {Routes, Route} from 'react-router-dom'
import "../styles/main.css"
import ActivityGenerator from "../presenters/activityGeneratorPresenter.js"
import Favorites from "../presenters/favoritesPresenter.js"
import Login from "../presenters/loginPresenter.js"
import SideBar from "../presenters/sideBarPresenter"
import Info from "../presenters/infoPresenter"
import Home from '../presenters/homePresenter'


export default function MainView(props) {
  return (
    <div className="main">
      <SideBar user={props.user}/>
      <Routes>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/activityGenerator" element={<ActivityGenerator/>}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/user" element={<Login currentUser={props.user.currentUser} loading={props.user.loading} error={props.user.error}/>}></Route>
        <Route path="/info" element={<Info />}></Route>
      </Routes>
    </div>

  )
}