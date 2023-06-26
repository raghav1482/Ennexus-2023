import React from 'react'
import './about.css'
import TextShpere from './TextShpere';

export default function About() {
  return (<>
    <div id="aboutmain" style={{ height: "10rem" }}></div>
    <div className="main">
      {/* <div className="threeD">
        <TextShpere />
      </div> */}
      <div className="en-content">
        <h1 className="titlw">Ennexus</h1>
        {/* <div className="titlw">
          <h2>Ennexus</h2>
          <h2>Ennexus</h2>
        </div> */}
        <hr style={{ color: "white" }}></hr>
        <p className="descr">Ennexus is a technical fest that is specifically designed for students to work and participate in the field of Computer Science. It is a platform that provides students with an opportunity to showcase their technical skills and compete with their peers from the same and other institutions as well. Ennexus offers a variety of events and competitions that are aimed at promoting innovation and creativity in the field of technology.<br/><br/>
          Overall, Ennexus is a festival that brings together the best and brightest minds in the field of technology, providing them with an opportunity to network, learn, and showcase their skills. It is an event that is not to be missed by anyone who is passionate about technology and innovation in the field of computer science.
        </p>
      </div>
    </div>
  </>
  );
}


