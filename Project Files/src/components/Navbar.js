import React from 'react';
import { useRef, useState, useEffect } from 'react';
import "./navbar.css";
import logo from "./assets/images/ces logo.png";

export default function Navbar() {
  const mylinks = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  };
  
  return (
    <>
      {/* nav-pc */}
      <nav className='navcontainer'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#aboutmain">About</a></li>
          <li><a href="#eventsmain">Event</a></li>
        </ul>
        <div id="logo">
          <img className='logoo' src={logo} alt="logo"></img>
        </div>
        <ul>
          <li><a href="#mainfaq">FAQ</a></li>
          <li><a href="#mainfoot">Contact Us</a></li>
        </ul>
      </nav>
      {/* nav-phone */}
      <div id="mobnav">
        <div id="logo">
          <img className='logoo' src={logo} alt="logo"></img>
        </div>
        <a href="javascript:void(0);" className="icon" onClick={handleClick} >
          <i className="fa fa-bars" ></i>
        </a>
        <div className="topnav" style={{ display: isActive ? "block" : "none" }}>
          <div id="myLinks" ref={mylinks}>
            <a href="/">Home</a>
            <a href="#aboutmain">About</a>
            <a href="#eventsmain">Events</a>
            <a href="#mainfaq">FAQ</a>
            <a href="#mainfoot">Contact Us</a>
          </div>
        </div>
      </div>

    </>);
}