import React from "react"
 import "../styles/login.css"

export default function ProfileView(props) {

  function logOutACB(e) {
    e.preventDefault();
    props.logOut()
  }

  return (
    <div className="login">
      <div className="textContainer">
        <h1>Profile</h1>
        <h4>{"Email: " + props.currentUser.email}</h4>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSA4ZZIuLGW7_5mu8kGOJ2f9DSBjf_jvHWeg&usqp=CAU"/>
        <br/>
        <button onClick={logOutACB}>Log Out</button> 
      </div>
    </div>
  )
} 