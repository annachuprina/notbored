import React, { useState } from "react"
import { useRef } from "react"
import "../styles/login.css"

export default function LoginView(props) {

  const emailRef = useRef()
  const passwordRef = useRef()
  const emailRef2 = useRef()
  const passwordRef2 = useRef()

  const [show, setShow] = useState()

  function logInACB(e) {
    e.preventDefault();
    props.logIn(emailRef.current.value, passwordRef.current.value)
  }

  function signInACB(e) {
    e.preventDefault();//Maybe add it to presenter?
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(pattern.test(emailRef2.current.value))
      props.signIn(emailRef2.current.value, passwordRef2.current.value)
    else
      alert("Format of email is wrong")
  }

  function displayLog() {
    if (props.error) return "Error: " + props.translateCodeError(props.error.code)
    if (props.user) return true
    return false
  } 

  return (
    <div className="login">
      <div className="textContainer">
          <h1>Login</h1>
          <h4>You are not logged!</h4>
          <form onSubmit={logInACB}>
            <label>Email</label><br/>
            <input type="text" placeholder="..." autoComplete="username" id="email" ref={emailRef} required></input><br/>
            <label>Password</label><br/>
            <input type="password" placeholder="..." autoComplete="current-password" id="password" ref={passwordRef} required></input><br/>
            <p className="errorMessage">{props.error && displayLog()}</p>
            <input type="submit" value="Log in"></input><br/>
          </form><br/>
          <div><h4>Are you a new user?</h4><button onClick={()=> setShow(!show)}>Register</button></div>
          {show && <form onSubmit={signInACB}>
            <label>Email</label><br/>
            <input type="text" placeholder="..." autoComplete="username" id="email2" ref={emailRef2} required></input><br/>
            <label>Password</label><br/>
            <input type="password" placeholder="..." autoComplete="new-password" id="password2" ref={passwordRef2} required></input><br/>
            <input type="submit" value="Sign in"></input><br/>
          </form>}
          <br/>
      </div>
    </div>
  )
}