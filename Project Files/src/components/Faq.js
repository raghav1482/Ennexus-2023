
import React from 'react'
import { useState } from 'react';
import { questions } from './Api'
import './faq.css';
import MyFaq from "./MyFaq";
export default function Faq() {
  const [data, setData] = useState(questions);
  return (
    <><div id="mainfaq"></div>
      <h2 className="main-head" style={{marginTop:"10rem"}}>FAQs</h2>
      <hr style={{color:"white" , width:"50vw" , margin:"10px auto"}}></hr>
      <section className="containrr">
        {
          data.map((Element) => {
            const { id } = Element;
            return <MyFaq key={id} {...Element} />
          })
        }
      </section>
    </>
  )
}
