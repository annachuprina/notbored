import React from 'react'
import HomeView from '../views/homeView'
import { useSelector } from 'react-redux'
import store from "../redux/store"
import { getActivityAction } from "../redux/actions/getActivityAction"
import { getCommentsAction } from '../redux/actions/getCommentsAction'
import { getRatingsAction } from '../redux/actions/getRatingsAction'

import { useNavigate } from 'react-router-dom'

export default function Home() {
  
  const activity = useSelector(state => state.activity)
  const navigate = useNavigate();

  function setSearchACB () {

    navigate("/activityGenerator")

    store.dispatch(getActivityAction("random", "random", "random", "random"))
    store.dispatch(getRatingsAction(activity.activity.key))
    store.dispatch(getCommentsAction(activity.activity.key))
  }

  return (
    <HomeView newSearch={setSearchACB}/>
  )
}