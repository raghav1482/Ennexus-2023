import React from 'react'
import { useState } from 'react'

export default function MyFaq({ question, answer }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("arrow down");
  const change = () => {
    !show ? setShow(true) : setShow(false);
    text === "arrow down" ? setText("arrow up") : setText("arrow down");
  }
  return (
    <>
      <div className="quest">
        <div className="ques"> <i onClick={change} className={text}></i>
          <div className="q"><h4>{question}</h4></div></div>
        {show && <p style={{color:"#00e18f"}}>{answer}</p>}
      </div>
    </>
  )
}
