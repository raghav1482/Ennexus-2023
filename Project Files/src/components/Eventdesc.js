import React from 'react';
import "./eventdesc.css";
import Winner from "./Winner";
import { Link } from 'react-router-dom';

export default function Eventdesc(props) {
    return (
        <> 
            <div className="container">
                    <Link to={'/'} className='back-btn'><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
                <div className="imgBx">
                    <img className='imn' src={props.imglink} alt="event background" />
                </div>
                <div className="details">
                    <div className="content">
                        <h2>{props.name} <br/>
                            <hr style={{ width: "50%", color: "white" }}></hr>
                        </h2>
                        <p>
                            {props.descc}
                        </p>
                        {/* <a href={props.rlink} style={{ backgroundColor: "white", color: "black", padding: "10px", textDecoration: "none", float: "right", borderRadius: '10px' }} >REGISTER NOW</a> */}
                        <h2>Winners</h2>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "2rem" }}><Winner photo={props.photo1} Name={props.Name1} branch={props.branch1} /><Winner photo={props.photo2} Name={props.Name2} branch={props.branch2} /><Winner photo={props.photo3} Name={props.Name3} branch={props.branch3} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}