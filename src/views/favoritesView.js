import React from 'react'
import { XCircle, PersonIcon } from '../assets/Icons'
import loading from '../assets/loading.gif' 
import '../styles/favorites.css'


export default function FavoritesView(props) {
  function nbParticipantsIcons(nb) {
    return (
      [...Array(nb)].map((_, d) => <PersonIcon key={d}/>)
    )
  }

  function displayFavorite(key, favorite){

    function deleteFromFavoritesACB(){
      props.deleteFromFavorites(favorite.key)
    }

    function showAccessibility(nb) {
      if (nb >= 0 && nb <= 0.3) return "Easy"
      if (nb > 0.3 && nb <= 0.7) return "Medium"
      return "Hard"
    }
    
    return  (
    <div key={key + "favorite"}>
      <div className="favoriteActivity" key={key}>
        <div>{favorite.activity}</div>
        <div>{favorite.price === 0 ? "free" : "not free"}</div>
        <div>{favorite.type}</div>
        <div>{showAccessibility(favorite.accessibility)}</div>
        <div className='nbParticipants'>{nbParticipantsIcons(favorite.participant)}</div>
        <div><XCircle className="xIcon" id={favorite.key} key={favorite.key + "button"} onClick={deleteFromFavoritesACB}/></div>
      </div>
    </div>
    )}

  return (
    <div className="favorites">
      <div className='textContainer'>
      { props.loading === true ? <>
          <div className="emptyList">
            <img src={loading}></img>
          </div>
        </>: !props.favorites || props.favorites.length === 0 ? <>
          <div className="emptyList">
            List of favorites is empty
          </div>
        </> :
        <>      
          <div className="favoriteActivityHeader">
            <div>Title</div>
            <div>Price</div>
            <div>Type</div>
            <div>Accessibility</div>
            <div>Participants</div>
            <div></div>
          </div>
          <div className='favoriteActivities'>
          { Object.entries(props.favorites).map(([key, value]) => displayFavorite(key, value))}
          </div>

        </>
      }
      </div>
    </div>
  )
}