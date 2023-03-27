import React, { useState } from 'react'
import ActivityGeneratorView from '../views/activityGeneratorView'
import ActivityGeneratorResultView from '../views/activityGeneratorResultView'
import { getActivityAction } from "../redux/actions/getActivityAction"
import { addToFavoritesAction, deleteFromFavoriteAction } from "../redux/actions/updateFavoritesAction"
import { addCommentAction } from '../redux/actions/setCommentAction'
import { getCommentsAction } from '../redux/actions/getCommentsAction'
import { setRatingAction } from '../redux/actions/setRatingAction'
import { getRatingsAction } from '../redux/actions/getRatingsAction'
import { getUserRatingsAction } from '../redux/actions/getUserRatingsAction'
import { useSelector } from 'react-redux'
import store from "../redux/store"


export default function ActivityGenerator(props) {
  const [participants, setParticipants] = useState("random")
  const [accessibility, setAccessibility] = useState("random")
  const [price, setPrice] = useState("random")
  const [type, setType] = useState("random")
  const [display, setDisplay] = useState(false)
  
  const activity = useSelector(state => state.activity)
  const favorites = useSelector(state => state.favorites)
  const user = useSelector(state => state.user)
  const comments = useSelector(state => state.comments)
  const ratings = useSelector(state => state.ratings)
  const userRating = useSelector(state => state.userRating)

  function setAccessibilityACB(accessibility){
    setAccessibility(accessibility)
  }

  function setParticipantsACB(participants){
    setParticipants(participants)
  }

  function setTypeACB(type){
    setType(type)
  }

  function setPriceACB(price){
    setPrice(price)
  }

  function setSearchACB(){
    store.dispatch(getActivityAction(participants, 
      accessibility, 
      price, 
      type
    ))
    store.dispatch(getRatingsAction(activity.activity.key))
    store.dispatch(getCommentsAction(activity.activity.key))
    store.dispatch(getUserRatingsAction(activity.activity.key, user.currentUser))
  }
    
  function addFavoriteActionACB(){
    if (user.currentUser !== {} )
      store.dispatch(addToFavoritesAction(activity, user.currentUser.uid))
    else{
      alert("Please login or register in order to add activity to favorites")
    }
  }

  function deleteFromFavoritesActionACB(){
    store.dispatch(deleteFromFavoriteAction(activity.activity.key, user.currentUser.uid))
  }

  function addCommentActionACB(comment) {
    if(comment.length > 0) {
      if (Object.keys(user.currentUser).length)
        store.dispatch(addCommentAction(activity.activity.key, user.currentUser, comment)) 
      else{
        alert("Please login or register in order to leave a comment")
      }
      getCommentACB()
    } else {
      alert("The comment field can not be empty when posting")
    }
  }

  function getCommentACB() {
    store.dispatch(getCommentsAction(activity.activity.key))
  }

  function setRatingActionACB(rating) {
    if(Object.keys(user.currentUser).length){
      store.dispatch(setRatingAction(activity.activity.key, user.currentUser.uid, rating))
      store.dispatch(getRatingsAction(activity.activity.key))
      store.dispatch(getUserRatingsAction(activity.activity.key, user.currentUser))
    } else {
      alert("Please login or register to leave a rating")
    }
  }



  return (
    <div className='generatorContainer'>
      <ActivityGeneratorView 
        type={["random", "education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]} 
        price={["random","free", "not free"]} 
        accessibility={["random", "easy", "medium", "hard"]} 
        participants={["random", 1, 2, 3, 4, 5]} 
        setParticipants={setParticipantsACB}
        setAccessibility={setAccessibilityACB}
        setType={setTypeACB}
        setPrice={setPriceACB}
        setSearch={setSearchACB}/>

      <ActivityGeneratorResultView 
        activity={activity.activity} 
        loading={activity.loading}
        generationError={activity.error} 
        addToFavorites={addFavoriteActionACB}
        deleteFromFavorites={deleteFromFavoritesActionACB}
        display={display}
        addComment={addCommentActionACB}
        comments={comments.comments}
        setRating={setRatingActionACB}
        ratings={ratings}
        userRating={userRating}
        favorites={favorites.favorites}
        currentUser={user.currentUser}
        />
    </div>
  )
}