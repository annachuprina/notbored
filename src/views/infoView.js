import React from 'react'
import "../styles/info.css"

export default function InfoView() {
  return (
    <div className='info'>
      <div className='textContainer'>
        <h1><strong>What is notBored?</strong></h1>
        <p>Have you ever found yourself <strong>not knowing what to do</strong> with your day? Then this is the application for you! With just a press of a button you will get a <strong>suggestion of an activity</strong> to do!</p>
        <p>If you have some preferences you will also be able to filter by a type that interests you, how many participants or maybe how much it costs to do it.</p>
        <br/>
        <p>Made by <a href="https://annachuprina.vercel.app" target="_blank">Anna Chuprina</a>,{" "}
                  <a href="https://www.linkedin.com/in/christina-8572a276" target="_blank">Christina Stohr</a>,{" "}
                  <a href="https://www.linkedin.com/in/navyasjoshi/" target="_blank">Navya Sanjna Joshi</a>,{" and "}
                  <a href="https://www.linkedin.com/in/octave-le-tullier-10b9141b3" target="_blank">Octave Le Tullier</a>.
        </p>
      </div>
    </div>
  )
}