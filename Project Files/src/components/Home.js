import React from 'react';
import { gsap } from "gsap";
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home.css";
import ship from "./assets/images/ship.png";
import univ from "./assets/images/univ-s.jpg";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    // scroll-invisible
    let invisible = function () {
        let nav=document.querySelector('.navcontainer')
        let ship1 = document.querySelector('#ship')
        let enx = document.querySelector('.ennexus')
        let y = window.scrollY
        if (y >= 300) {
            ship1.style.opacity = '0'
            enx.style.opacity = '0'
            nav.style.className='nav-phone'
        }
        if (y < 300) {
            ship1.style.opacity = '1'
            enx.style.opacity = '1'
            if(nav.style.className==='nav-phone'){
                nav.style.className='navcontainer'
            }
        }
        if (y >= 1000) {
            ship1.style.display = 'none'
            enx.style.display = 'none'
        }
        if (y < 1000) {
            ship1.style.display = 'block'
            enx.style.display = 'block'
        }
    }
    window.addEventListener("scroll", invisible);

    useEffect(() => {
        gsap.set(".blur1", { filter: "blur(0px)" });
        gsap.to("#bg", {
            filter: "blur(10px)",
            scrollTrigger: {
                scrub: 1
            },
            scale: 1.3,
        });
        gsap.to("#ship", {
            scrollTrigger: {
                scrub: 1
            },
            scale: 5
        });
        gsap.to(".ennexus", {
            scrollTrigger: {
                scrub: 1
            },
            scale: 2.0
        });
    });
    return (
        <>
            <section id='section' style={{ color: "white", fontSize: "70px" }}>
                <img src={univ} id="bg"/>
                <img src={ship} id="ship" alt="img" />
                {/* <img src={ship1} id="ship1" style={{ zIndex: '10001' }} alt="img" />
                <img src={ship2} id="ship2" style={{ zIndex: '10001' }} alt="img" /> */}
                <h1 className="ennexus">Ennexus'<span style={{color:"#00e18f"}}>23</span></h1>
            </section> 
            <div style={{ height: "00vh" }}></div>
        </>);
}