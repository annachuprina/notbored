import React, {useState, useEffect} from 'react'
import '../styles/activityResultGenerator.css'
import { HeartIcon, FilledHeart, CoinIcon, PersonIcon, StarFillIcon, XCircle  } from "../assets/Icons.js"
import loading from '../assets/loading.gif' 


export default function ActivityGeneratorResultView(props) {

  const [commentInput, setCommentInput] = useState("")
  
  function addToFavoritesACB() {
    props.addToFavorites()
  }

  function deleteFromFavoritesACB() {
    props.deleteFromFavorites()
  }

  function addCommentACB() {
    props.addComment(commentInput)
    setCommentInput("")
  }

  function setRatingACB() {
    if(props.currentUser)
    var checked = document.querySelector('input[type = "radio"]:checked');
    var value = 0
    switch(checked.id){
      case "starOne":
        value = 1;
        break;
      case "starTwo":
        value = 2;
        break;
      case "starThree":
        value = 3;
        break;
      case "starFour":
        value = 4;
        break;
      case "starFive":
        value = 5;
        break;
      default:
        value = 0;
    }

    var ele = document.getElementsByName("radioStar");
    for(var i=0;i<ele.length;i++){
      if(ele[i].id !== checked.id) ele[i].checked = false;
      else if(props.currentUser.uid === undefined) ele[i].checked = false;
    }
    props.setRating(value);

  }

  function getImageLocation(type){
    if(type === undefined) return "/images/undefined_image.png"
    return "/images/" + type + "_image.png"
  }

  function showPriceIcons(nb) {
    if (nb > 0) {
      return (//Maybe add it to presenter?
        [...Array(Math.floor(nb * 10 / 3) + 1)].map((_, d) => <CoinIcon className="icon" key={d}/>)
      )
    }
    return "Free"
  }

  function showAccessibility(nb) {//Maybe add it to presenter?
    if (nb >= 0 && nb <= 0.3) return "Easy"
    if (nb > 0.3 && nb <= 0.7) return "Medium"
    return "Hard"
  }

  function showParticipantsIcons(nb) {
    return (
      [...Array(nb)].map((_, d) => <PersonIcon className="icon" key={d}/>)
    )
  }

  function showRatingIcons(rating, iconName) {
    if (!rating && iconName !== "starIconDark") return "Not rated yet"
    if (rating === 5 && iconName === "starIconDark") return ""
    return(
      [...Array(rating)].map((_, r) => <StarFillIcon className={iconName} key={r}/>)
    )
  }

  function alertMessageToUserACB(){
    alert("Please login or register.")
  }
  
  // Show comments : uid -> {comment, pseudo}
  function showComments(json) {
    if(json && Object.keys(json).length){
      return Object.entries(json).map((d, i) => 
          <div key={i} className="comment">
            <div className="text">{d[1]["comment"]}</div>
            <div className="name">
            {"By "}
            <strong>{d[1]["name"]}</strong>
            {" on "}
            {d[1]["date"]}</div>
          </div>
        )
    }
    return <div key="noComments" className="comment">
      No comments yet
    </div>
  }

  function displayStar() {
    return <StarFillIcon></StarFillIcon>
  }
  
  function isActivityInFavorites(activityKey){
    const existItem = props.favorites.length > 0  ? props.favorites.find(item => item.key === activityKey) : false
    if(!existItem || props.favorites === {})
      return false
    return true
  }

  function enterToComment(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addCommentACB()
      }
  }

  function getUserRating(rating){
    switch(rating){
      case undefined:
        var ele = document.getElementsByName("radioStar");
        for(var i=0;i<ele.length;i++){
          ele[i].checked = false;
        }
        break;
      case null:
        var ele = document.getElementsByName("radioStar");
        for(var i=0;i<ele.length;i++){
          ele[i].checked = false;
        }
        break;
      case 1:
        var one = document.querySelector('input[id="starOne"]')
        if(one) one.checked = true;
        break;
      case 2:
        var two = document.querySelector('input[id="starTwo"]')
        if(two) two.checked = true;
        break;
      case 3:
        var three = document.querySelector('input[id="starThree"]')
        if(three) three.checked = true;
        break;
      case 4:
        var four = document.querySelector('input[id="starFour"]')
        if(four) four.checked = true;
        break;
      case 5:
        var five = document.querySelector('input[id="starFive"]')
        if(five) five.checked = true;
        break;
      default:
      }
  }

  return (
    <>
      {props.loading && <img src={loading} className="loadingLogo"></img>}
      {props.activity.activity && 
      <div className="result">
        <div className='imgContainer'>
          <img src={getImageLocation(props.activity.type)} alt="" className="activityImg"></img>
        </div>
        <div className='contentsContainer'>
          <div className="details">
            <h3>
              {props.activity.activity ? props.activity.activity : 'Click on the button above to generate an activity'}
              {props.currentUser && Object.keys(props.currentUser).length === 0 ? <HeartIcon className="heartIcon" onClick={alertMessageToUserACB}/> :
              isActivityInFavorites(props.activity.key) ? <FilledHeart className="heartIcon filled" onClick={deleteFromFavoritesACB}/> :
              <HeartIcon className="heartIcon" onClick={addToFavoritesACB}/>}
            </h3>
            <p><strong>Average rating: </strong>{showRatingIcons(props.ratings.ratings, "starIcon")}{showRatingIcons(5 - props.ratings.ratings, "starIconDark")}</p>
            <p><strong>Price: </strong>{showPriceIcons(props.activity.price)}</p>
            <p><strong>Type: </strong>{props.activity.type.charAt(0).toUpperCase() + props.activity.type.slice(1)}</p>
            <p><strong>Accessibility: </strong>{showAccessibility(props.activity.accessibility)}</p>
            <p><strong>Participants: </strong>{showParticipantsIcons(props.activity.participants)}</p>
            <p><a href={`https://duckduckgo.com/?q=${props.activity.activity}`}>More information on the web</a></p>
          </div> 
        </div>
        <div className='commentsContainer'>
          <div className='scrollView'>{showComments(props.comments)}</div>
          <div className='addComment'> 
            <div className="starContainer">
              <div className="starWidget">
                {getUserRating(props.userRating.ratings)}
                <input type="radio" name="radioStar" id="starFive" onClick={setRatingACB}/>
                <label htmlFor="starFive" className='star'>{displayStar()}</label>
                <input type="radio" name="radioStar" id="starFour" onClick={setRatingACB}/>
                <label htmlFor="starFour" className='star'>{displayStar()}</label>
                <input type="radio" name="radioStar" id="starThree" onClick={setRatingACB}/>
                <label htmlFor="starThree" className='star'>{displayStar()}</label>
                <input type="radio" name="radioStar" id="starTwo" onClick={setRatingACB}/>
                <label htmlFor="starTwo" className='star'>{displayStar()}</label>
                <input type="radio" name="radioStar" id="starOne" onClick={setRatingACB}/>
                <label htmlFor="starOne" className='star'>{displayStar()}</label>
              </div>
            </div>
            <input onKeyUp={enterToComment} placeholder='Comment...' value={commentInput} onChange={(e) => setCommentInput(e.target.value)} ></input>
            <button onClick={addCommentACB}>Add comment</button>
          </div>
        </div>
      </div>
      }
      {props.generationError && 
      <div className="errorResult">
        <div className='imgContainer'>
          <img src={getImageLocation()} alt="" className="activityImg"></img>
        </div>          
        <div className='contentsContainer'>
          <div className="details">
            <p><XCircle className="crossIcon"/>{" "}No activity found with the specified parameters.</p>
            <p>Change one (or more) of the chosen parameters to random and try again please!</p>
          </div> 
        </div>
      </div>
      }
    </>
  )
}