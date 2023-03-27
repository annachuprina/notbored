import React, {useEffect} from 'react'
import FavoritesView from '../views/favoritesView'
import {useDispatch, useSelector} from'react-redux'
import { deleteFromFavoriteAction,fetchFavoriteFromFirebaseAction } from "../redux/actions/updateFavoritesAction"
import store from "../redux/store"

export default function Favorites() {
  const favorites = useSelector(state => state.favorites)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user.currentUser !== {})
      dispatch(fetchFavoriteFromFirebaseAction(user.currentUser.uid))
  }, [dispatch, user])

  function deleteFromFavoritesACB(key){
    store.dispatch(deleteFromFavoriteAction(key, user.currentUser.uid))
  }
  return (
    <FavoritesView 
    favorites={favorites.favorites}
    deleteFromFavorites={deleteFromFavoritesACB}
    loading={favorites.loading}/>
  )
}