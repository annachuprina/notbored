import React from 'react'
import "../styles/userMessage.css"

export default function UserMessageView(props) {
  return (
    <>
    {props.display &&
    <div className="message">
        <div className="messageBox">
            {props.message}
        </div>
    </div>
    }
    </>
  )
}
