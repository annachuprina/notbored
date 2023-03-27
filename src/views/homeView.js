import React from 'react'
import { CameraIcon, BasketBallIcon, BrushIcon, ControllerIcon, BikeIcon, BagHeartIcon  } from "../assets/Icons.js"
import "../styles/home.css"

export default function HomeView(props) {

  return (
    <div className="home">
            <ul className="iconsMoving">
                    <li><CameraIcon/></li>
                    <li><ControllerIcon/></li>
                    <li><BasketBallIcon/></li>
                    <li><BrushIcon/></li>
                    <li><BrushIcon/></li>
                    <li><BagHeartIcon/></li>
                    <li><BikeIcon/></li>
                    <li><BasketBallIcon/></li>
                    <li><BrushIcon/></li>
                    <li><ControllerIcon/></li>
            </ul>
            <div className="textContainer">
            <h1>Welcome to notBored!</h1>
            <p>Are you bored? Or you don't know what to do right now?</p>
            <p>Click on the button below to generate a <strong>random activity</strong> that you can try!</p>
        </div>
        <div className='center'>
          <button onClick={props.newSearch}>Try out!</button>
        </div>
    </div>
  )
}
