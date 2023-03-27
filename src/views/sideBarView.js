import React, {useState}  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { InfoCircleIcon, HeartIcon, PersonIcon, PatchPlus } from "../assets/Icons"
import "../styles/sideBar.css"


export default function SideBarView(props) {

  function toSide() {
    document.getElementsByClassName("sideBar")[0].classList.toggle("active")
    document.getElementById("toSide").innerHTML = "<"
    if (document.getElementsByClassName("sideBar")[0].classList.value.includes("active")) {
      document.getElementById("toSide").innerHTML = ">"
    }
  }

  return (
   <div className="sideBarContainer">
      <div className="sideBar">
        <div className="sideBarLinks">
          <Link to="/" className='title'>notBored!</Link>        
          <Link to="/activityGenerator" className='sideBarLink'><PatchPlus className="icon"/>{" "}Activity Generator</Link>
          {props.user && Object.entries(props.user).length > 0 && <Link to="/user" className='sideBarLink'><PersonIcon className="icon"/>{" "}Logout</Link>}
          {props.user && Object.entries(props.user).length === 0 && <Link to="/user" className='sideBarLink'><PersonIcon className="icon"/>{" "}Login</Link>}
          <Link to="/favorites" className='sideBarLink'><HeartIcon className="icon"/>{" "}Favorites</Link>
          <Link to="/info" className='sideBarLink'><InfoCircleIcon className="icon"/>{" "}About</Link>
        </div>
      </div>
      <button id="toSide" onClick={toSide} className="toSide">{"<"}</button>
    </div>
  )
}