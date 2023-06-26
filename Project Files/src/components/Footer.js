import React from "react";
import "./footer.css";
import fb from "./assets/images/fb.png";
import ig from "./assets/images/ig.png";
import linkedin from "./assets/images/lin.png";
import sp1 from "./assets/images/sp1.png";
import sp2 from "./assets/images/sp2.png";
import sp3 from "./assets/images/sp3.png";
export default function Footer() {
    return (
        <>
            <div className="container-fluid mt-5 foot" id="mainfoot">
                <div className="card1 mx-0" style={{ backgroundColor: "#101522" }}>
                    <div className="row mb-4 pt-3">
                        <div className="col-md-4 col-sm-4 col-xs-4 cont mb-3">
                            <div className="footer-text ">
                                <div className="d-flex">
                                    <h1 className="font-weight-bold mr-2 px-3 fonT" style={{ color: "white", backgroundColor: "#00e18f" , fontWeight:"600" }}> CES</h1>
                                    <h1 className="fonT" style={{ color: "#00e18f",fontWeight:"600" }}>MMMUT</h1>
                                </div>
                                <p className="card-text" style={{ color: "white" }}>The Computer Engineering Society has been functioning since 1993 with the collective efforts of a group of B.Tech. students who had a strong urge to complement the theoretical and practical knowledge imparted in the classroom and laboratory, with emphasis on development of overall personality of budding engineering graduates.</p>
                            </div>
                        </div>
                        <div className="containfoot">
                        <div style={{width:"250px"}}>
                            <h5 className="heading">CONTACT US</h5>
                            <ul className="card-text" style={{ color: "white" }}>
                                <li>MMMUT Gorakhpur , U.P ,India</li>
                                <li>Email : cesmmmut.web@gmail.com</li>
                                <li><div className="social mt-2 mb-3">
                                    <a href="https://www.facebook.com/cesmmmut"><img src={fb} alt="fb"/></a>
                                    <a href="https://www.instagram.com/cesmmmut"><img src={ig} alt="fb"/></a>
                                    <a href="https://www.linkedin.com/company/cesmmmut"><img src={linkedin} alt="fb"/></a></div></li>
                            </ul>
                        </div>
                        <div style={{width:"250px"}}>
                            <h5 className="heading">OUR SPONSORS</h5>
                            <ul className="card-text" style={{ color: "white" }}>
                                <li><div className="spon mt-2 mb-3" style={{display:"flex" , flexDirection:"column"}}>
                                    <a><img src={sp1} alt="fb"/></a>
                                    <a><img src={sp2} alt="fb"/></a>
                                    <a><img src={sp3} alt="fb"/></a></div></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="divider mb-4"> </div>
                    <div className="row" style={{ fontSize: "10px" }}>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="pull-left">
                                <p style={{ color: "white" }}><i className="fa fa-copyright" ></i> Copyright CES-2k23. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}